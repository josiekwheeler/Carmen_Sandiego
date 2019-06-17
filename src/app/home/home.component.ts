import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  isOn: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  onFlip() {
    this.isOn = !this.isOn;
  }

}
