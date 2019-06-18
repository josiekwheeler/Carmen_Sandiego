import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})

export class ClockService {
time:number =24 ;

  constructor() { }


getTime(){
  return this.time;
}

  onClue() {
  return  this.time -= 1;

  }
  onFlight() {
   return this.time -= 3;

  }
  onWrong() {
  return  this.time -= 2;
  }
}