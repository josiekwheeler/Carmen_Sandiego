import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})

export class ClockService {
  clock = new Date(2019, 5, 28, 12, 0, 0);
time:number = 24;

  constructor() { }


getTime(){
  return this.clock;
}
onClue() {
  this.clock.setHours(this.clock.getHours()+1);

  }
  // onClue() {
  // return  this.time -= 1;

  // }
  onFlight() {
   return this.time -= 3;

  }
  onWrong() {
  return  this.time -= 2;
  }
}