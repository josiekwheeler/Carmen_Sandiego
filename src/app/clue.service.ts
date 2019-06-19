import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class ClueService {
  // array for the locations carmen visits
  locations = ['Paris', 'Moscow', 'Dubai', 'Detroit'];
  // locations that are locations that are similar to the real locations, each one has the same index number as the real, to make it easy to match
  redHerring = ['Cannes', 'Sochi', 'Abu Dhabi', 'Cleveland'];
  // just random wrong locations to use
  wrongLocations = ['London', 'Madrid', 'Hong Kong', 'Washington, DC', 'New York', 'Dublin', 'Berlin', 'Rome', 'Warsaw'];
  // id is used to keep track of what location component we are in
  id:number = 1;

  constructor(private http: HttpClient, private router: Router) { }
  getClues(nextCity) {
    return this.http.get(`http://localhost:3000/clues/${nextCity}`, { responseType: 'json'});
  }

  rightChoice() {
    this.id++;
    console.log(this.id)
    this.router.navigate([`/location${this.id}`]);
  }




}

