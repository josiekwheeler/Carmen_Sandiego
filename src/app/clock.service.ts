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
  score;

  constructor(private router: Router) {}
  resetTime() {
    this.clock = new Date();
    this.timeLeft = 24;
  }
  getTimeLeft() {
    return this.timeLeft;
  }
  getTime() {
    return this.clock;
  }
  onClue() {
    this.clock.setHours(this.clock.getHours() + 1);
    this.timeLeft--;
    this.isTimeLeft();
  }
  // onClue() {
  // return  this.time -= 1;

  // }
  onFlight() {
    this.clock.setHours(this.clock.getHours() + 3);
    this.timeLeft -= 4;
    this.isTimeLeft();
  }
  onWrong() {
    this.clock.setHours(this.clock.getHours() + 5);
    this.timeLeft -= 5;
    this.isTimeLeft();
  }

  isTimeLeft() {
    console.log("timeleft")
    if (this.timeLeft > 0) {
      console.log("timeleft over 0")
      return;
    } else {
      console.log("timeleft under 0")
      this.router.navigate(['/gameover']);
    }
  }
  scoreGame() {
    this.score = 24 - this.timeLeft;
    console.log(this.score);
    return this.score;
  }
}
