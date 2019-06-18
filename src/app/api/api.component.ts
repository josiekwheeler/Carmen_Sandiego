import { Component, OnInit } from '@angular/core';
import { WikiService } from '../wiki.service';

@Component({
  selector: 'api',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.css']
})
export class ApiComponent implements OnInit {


  wikiPic: any[]=[];


  constructor(private wikiService: WikiService) { }

  ngOnInit() {
  }

  searchWiki(){
    this.wikiService.getWikiData().subscribe(response => {
      this.wikiPic = response["data"]
      console.log(response);
    })
  }

}
