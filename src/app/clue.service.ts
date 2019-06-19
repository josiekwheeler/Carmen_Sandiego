import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ClueService {

  locations = ['Paris', 'Moscow', 'Dubai', 'Detroit'];
  redHerring = ['Cannes', 'Sochi', 'Abu Dhabi', 'Cleveland'];
  wrongLocations = ['London', 'Madrid', 'Hong Kong', 'Washington, DC', 'New York', 'Dublin', 'Berlin', 'Rome', 'Warsaw'];

  constructor(private http: HttpClient) { }
  getClues(nextCity) {
    return this.http.get(`http://localhost:3000/clues/${nextCity}`, { responseType: 'json'});
  }
}
