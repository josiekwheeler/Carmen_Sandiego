import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ClueService {


  constructor(private http: HttpClient) { }
  getClues(nextCity) {
    return this.http.get(`http://localhost:3000/clues/${nextCity}`, { responseType: 'json'});
  }
}
