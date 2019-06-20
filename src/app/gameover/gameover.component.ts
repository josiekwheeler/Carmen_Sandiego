import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-gameover',
  templateUrl: './gameover.component.html',
  styleUrls: ['./gameover.component.css']
})
export class GameoverComponent implements OnInit {
  userName: string;

  constructor(private userService: UserService,) { }

  ngOnInit() {
    this.userName = this.userService.returnUserName();
    console.log(this.userName);
    this.userName = this.userService.userName;
  };

 
 
}
