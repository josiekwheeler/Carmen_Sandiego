import { Component, OnInit } from '@angular/core';
import { getClosureSafeProperty } from '@angular/core/src/util/property';
import { ClueService } from '../clue.service';

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

  constructor(private clueService: ClueService) { }
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
  }


}
