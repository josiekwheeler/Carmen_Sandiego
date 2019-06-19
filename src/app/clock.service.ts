import { Injectable } from '@angular/core';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})

export class ClockService {
clock = new Date(2019, 5, 28, 12, 0, 0);
timeLeft:number = 24;

  constructor(private router: Router) { }


getTime(){
  return this.clock;
}
onClue() {
  this.clock.setHours(this.clock.getHours() + 1);
  this.timeLeft--;

  }
  // onClue() {
  // return  this.time -= 1;

  // }
  onFlight() {
    this.clock.setHours(this.clock.getHours() + 3);
    this.timeLeft -= 4;

  }
  onWrong() {
    this.clock.setHours(this.clock.getHours() + 5);
    this.timeLeft -= 5;
  }

  isTimeLeft() {
    if (this.timeLeft < 24) {
      return;
    } else {
      this.router.navigate(['/gameover']);
    }
  }
}
