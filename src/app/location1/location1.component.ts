import { Component, OnInit } from '@angular/core';
import { ClueService } from '../clue.service';
import { PexelApiService } from '../pexel-api.service';
import { ClockService } from '../clock.service';

import { UserService} from '../user.service';


@Component({
  selector: 'location1',
  templateUrl: './location1.component.html',
  styleUrls: ['./location1.component.css']
})
export class Location1Component implements OnInit {

  userName: string;

  clueNumber = -2;  // variable that is used for ngIfs to only show one pop-up message/clue at a time
  time; // for timer, hold the remaining time.
  clues;  // array to hold our clues 
  tempClueNumber = 0;  // variable used in flyOut and goBack to save clue number so you can return to it from fly out page
  flight = false;  //  used to toggle flight screen or not

  nextCity = 'Moscow';  // what the next city location is
  currentCity = 'Paris';  // current city
  photoURL; // variable to hold URL for random background photo
  localClues;  // array to hold shuffled array of clues
  randomPhoto: number = Math.floor((Math.random() * 9));  // used to get a random index number for background photo
  redHerring; // a fake out location that is similar to the next city
  wrongLocation;  // a randomw wrong option
  timeLeft;
  locations = [];
  wrong = false;
  selectedCity;



  constructor(private userService: UserService, private clueService: ClueService, private pexelService: PexelApiService, private clockService: ClockService) { }

  // method that increases clueNumber so we can show the next clue
  showClue() {
    this.clueNumber = 0;
    this.clockService.onClue();
    this.time = this.clockService.getTime();
    // console.log(this.clueNumber);
  }
  // this method temporarily saves the clue number when you bring up the flight screen, sets cluenumber to -1 so it doesn't show
  flyOut() {
    this.tempClueNumber = this.clueNumber;
    this.clueNumber = -1;
    this.flight = true;
  }
  // method that returns cluenumber to what it was before you click on flight screen and toggles flight back
  goBack() {
    this.clueNumber = this.tempClueNumber;
    this.flight = false;
    this.wrong = false;
  }
  goBackAirport() {
    this.wrong = !this.wrong;
    this.flight = !this.flight;
  }
  // increase clueNumber to display next clue
  nextClue() {
    this.clueNumber++;
    this.clockService.onClue();
    this.time = this.clockService.getTime();

    this.clockService.isTimeLeft();
    this.timeLeft = this.clockService.getTimeLeft();

  }
  selectLocation() {
    if (this.selectedCity !== this.nextCity) {
      this.flight = !this.flight;
      this.wrong = !this.wrong;
      this.clockService.onWrong();
      this.clockService.isTimeLeft();
    } else {
      this.clockService.onFlight();
      this.clockService.isTimeLeft();
      this.clueService.rightChoice();
    }
    console.log(this.selectedCity);

  }




  ngOnInit() {
    // this brings in the clues from the DB and adds them to clues array on load
    this.clueService.getClues(this.nextCity).subscribe(response => {
      this.clues = response;
      this.clues.push({ flag: this.clues[1].countrycode });
      // console.log(this.clues);
    });
    // gets a random photo for clue and adds it to clues array
    this.pexelService.getLocationPhoto(this.nextCity).subscribe(response => {
      this.clues.unshift({ photo: response[`photos`][`${this.randomPhoto}`].src.small });
      console.log(this.clues);
    });
    // this gets a random photo of current city to use as background image
    this.pexelService.getLocationPhoto(this.currentCity).subscribe(response => {
      this.photoURL = response[`photos`][`${this.randomPhoto}`].src.landscape;

      // below is used to shuffle clues array and save it as localClues array
      let currentIndex = this.clues.length;
      while (0 !== currentIndex) {
        const randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        const temporaryValue = this.clues[currentIndex];
        this.clues[currentIndex] = this.clues[randomIndex];
        this.clues[randomIndex] = temporaryValue;
        this.localClues = this.clues;
        // console.log(this.localClues);
      }
      // gets the redHerring option from service then a wrong city
      this.redHerring = this.clueService.redHerring[1];
      this.wrongLocation = this.clueService.wrongLocations[1];
      this.locations.push(this.redHerring, this.wrongLocation, this.nextCity);
      console.log(this.locations);
      return this.localClues;
    });
    this.time = this.clockService.getTime();
    this.timeLeft = this.clockService.getTimeLeft();
    this.userName = this.userService.userName;
  }

}