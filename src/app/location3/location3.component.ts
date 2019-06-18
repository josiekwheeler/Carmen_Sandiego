import { Component, OnInit } from '@angular/core';
import { getClosureSafeProperty } from '@angular/core/src/util/property';
import { ClueService } from '../clue.service';
import { PexelApiService } from '../pexel-api.service';

@Component({
  selector: 'location3',
  templateUrl: './location3.component.html',
  styleUrls: ['./location3.component.css']
})
export class Location3Component implements OnInit {

  clueNumber = -1;
  clues;
  tempClueNumber = 0;
  flight = false;
  nextCity = ['Detroit'];
  currentCity = 'Dubai';
  photoURL;
  localClues;
  randomPhoto: number = Math.floor((Math.random() * 9));
  randomDetroitPhoto: number = Math.floor((Math.random() * 2));


  constructor(private clueService: ClueService, private pexelService: PexelApiService) { }
  showClue() {
    console.log(this.clueNumber);
    this.clueNumber++;
    console.log(this.clueNumber);
  }
  flyOut() {
    this.tempClueNumber = this.clueNumber;
    this.clueNumber = -1;
    this.flight = true;
  }
  goBack() {
    this.clueNumber = this.tempClueNumber;
    this.flight = !this.flight;
  }
  nextClue() {
    this.clueNumber++;
  }

  ngOnInit() {
    this.clueService.getClues(this.nextCity).subscribe(response => {
      this.clues = response;
      // console.log(this.clues);
    });
    this.pexelService.getLocationPhoto(this.nextCity).subscribe(response => {
      this.clues.unshift({photo: response[`photos`][`${this.randomDetroitPhoto}`].src.small});
      // console.log(this.clues);
  });
    this.pexelService.getLocationPhoto(this.currentCity).subscribe(response => {
      this.photoURL = response[`photos`][`${this.randomPhoto}`].src.portrait;
      // console.log(this.photoURL);
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

  }


  }
  // locationClues() {
  //   while (this.localClues <= 3 ) {
  //     let i = Math.floor((Math.random() * (this.clues.length - 1)));
  //     console.log(i);
  //     this.localClues.push(this.clues[i]);
  //   }
  //   console.log(this.localClues);
  // }


