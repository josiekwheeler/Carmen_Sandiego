import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  shouldBeShown: boolean = true;

  ngOnInit() {
  }

  toggleDisplay() :void {
    this.shouldBeShown = !this.shouldBeShown;
  }

}
