import { Component, OnInit } from '@angular/core';
import { ClueService } from '../clue.service';
import { PexelApiService } from '../pexel-api.service';
import { ClockService } from '../clock.service'
@Component({
  selector: 'location3',
  templateUrl: './location3.component.html',
  styleUrls: ['./location3.component.css']
})
export class Location3Component implements OnInit {
  
  constructor(private clueService: ClueService, private pexelService: PexelApiService, private clockService: ClockService) { }
  time: number; // for timer, hold the remaining time.
  clueNumber = -1;  // variable that is used for ngIfs to only show one pop-up message/clue at a time
  clues;  // array to hold our clues 
  tempClueNumber = 0;  // variable used in flyOut and goBack to save clue number so you can return to it from fly out page
  flight = false;  //  used to toggle flight screen or not
  nextCity = 'Detroit';  // what the next city location is
  currentCity = 'Dubai';  // current city
  photoURL; // variable to hold URL for random background photo
  localClues;  // array to hold shuffled array of clues
  randomPhoto: number = Math.floor((Math.random() * 9));  // used to get a random index number for background photo
  randomDetroitPhoto: number = Math.floor((Math.random() * 2));  // detroit only had 3 photos, this selects on of those

  // method that increases clueNumber so we can show the next clue
  showClue() {
    this.clueNumber++;
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
    this.flight = !this.flight;
  }
  // increase clueNumber to display next clue
  nextClue() {
    this.clueNumber++;
  }


  ngOnInit() {
    // this brings in the clues from the DB and adds them to clues array on load
    this.clueService.getClues(this.nextCity).subscribe(response => {
      this.clues = response;
      // console.log(this.clues);
    });
    // gets a random photo for clue and adds it to clues array
    this.pexelService.getLocationPhoto(this.nextCity).subscribe(response => {
      this.clues.unshift({ photo: response[`photos`][`${this.randomDetroitPhoto}`].src.small });
      // console.log(this.clues);
<<<<<<< HEAD
    });
=======
  });
  // this gets a random photo of current city to use as background image
>>>>>>> 431d17f5dd945e018624016fabdf30ace244f495
    this.pexelService.getLocationPhoto(this.currentCity).subscribe(response => {
      this.photoURL = response[`photos`][`${this.randomPhoto}`].src.portrait;
      // console.log(this.photoURL);
      // below is used to shuffle clues array and save it as localClues array
      let currentIndex = 3;
      while (0 !== currentIndex) {
        const randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        const temporaryValue = this.clues[currentIndex];
        this.clues[currentIndex] = this.clues[randomIndex];
        this.clues[randomIndex] = temporaryValue;
        this.localClues = this.clues;
        console.log(this.localClues);
      }
      return this.localClues;
    });
    this.time = this.clockService.getTime();
  }


<<<<<<< HEAD
}
  // locationClues() {
  //   while (this.localClues <= 3 ) {
  //     let i = Math.floor((Math.random() * (this.clues.length - 1)));
  //     console.log(i);
  //     this.localClues.push(this.clues[i]);
  //   }
  //   console.log(this.localClues);
  // }
=======
  }

>>>>>>> 431d17f5dd945e018624016fabdf30ace244f495


