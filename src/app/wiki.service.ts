
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WikiService {

  constructor( private http: HttpClient) { }

  getWikiData() {
    return this.http.get('https://en.wikipedia.org/api/rest_v1/#/France#/media/File:Flag_of_France.svg/w/api.php')
  }
}
