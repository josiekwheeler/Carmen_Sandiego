import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  userName: string = null;
  constructor() { }

  getUserName(form) {
    this.userName = form.value.userName;
    console.log(this.userName);
    // return this.userName;  
  }

  returnUserName() {
    return this.userName;
  }
}