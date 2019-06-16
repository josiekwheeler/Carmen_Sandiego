import { Component } from '@angular/core';
import { PexelApiService } from './pexel-api.service'

@Component({
  selector: 'app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'Carmen-Sandiego-FP';
  // photo: any[];
  // nextLocation: string = 'Moscow';
  // randomIndex: number = Math.floor((Math.random() * 9));

  // constructor(private pexelService: PexelApiService) { }
 
  ngOnInit() {
    // this.pexelService.getLocationPhoto(`${this.nextLocation}`).subscribe(response => {
    //   console.log(this.randomIndex);
    //   this.photo = response[`photos`][`${this.randomIndex}`].src.medium;
    //   console.log(response);
    //   return this.photo;
    // });
  }


}
