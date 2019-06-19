import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService} from '../user.service';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
userName: string;
  // isOn: boolean = false;

  constructor(private route: ActivatedRoute, private userService: UserService) { }

  ngOnInit() {
    this.userName = this.userService.userName;
    console.log(this.userName);
    
  }


  // onFlip() {
  //   this.isOn = !this.isOn;
  // }

}
