import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  // isOn: boolean = false;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
  }

  // onFlip() {
  //   this.isOn = !this.isOn;
  // }

}
