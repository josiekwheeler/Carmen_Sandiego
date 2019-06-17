import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'location3',
  templateUrl: './location3.component.html',
  styleUrls: ['./location3.component.css']
})
export class Location3Component implements OnInit {

  clueNumber = 0;
  tempClueNumber = 0;
  flight = false;
  constructor() { }
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

  ngOnInit() {
  }


}
