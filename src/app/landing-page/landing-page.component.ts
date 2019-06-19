import { Component, OnInit,} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService, } from '../user.service'

@Component({
  selector: 'landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {
  
  constructor(private route: ActivatedRoute, private userService: UserService) { }

  shouldBeShown: boolean = true;
userName: string;
  ngOnInit() {
  }

  toggleDisplay() :void {
    this.shouldBeShown = !this.shouldBeShown;
  }
  setUserName(form){
  console.log(form);
  this.userService.getUserName(form);
  console.log(this.userName);
  // return this.userName
}
}
