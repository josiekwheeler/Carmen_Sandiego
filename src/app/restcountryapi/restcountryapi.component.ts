import { Component, OnInit } from '@angular/core';
import { ApiService} from '../api.service';

@Component({
  selector: 'restcountryapi',
  templateUrl: './restcountryapi.component.html',
  styleUrls: ['./restcountryapi.component.css']
})
export class RestcountryapiComponent implements OnInit {

  countries: any[] = [];

  constructor(private apiService: ApiService) { }

  ngOnInit() {
  }

  searchCountry(form) {
    this.apiService.getCountryData(form.value.countryName).subscribe(response => {
      this.countries = response["data"]
      console.log(response);
    })
  }

}
