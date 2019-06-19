import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ClockService {
  // clock is to display date and time on screen for user as current date and time
  clock = new Date();
  // timeLeft is to keep track of how much time user has left if 0, game is over
  timeLeft: number = 24;

  constructor(private router: Router) {}
  getTimeLeft() {
    return this.timeLeft;
  }
  getTime() {
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
    if (this.timeLeft > 0) {
      return;
    } else {
      this.router.navigate(['/gameover']);
    }
  }
}
