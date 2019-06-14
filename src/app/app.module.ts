import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{ApiService} from './api.service';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { RestcountryapiComponent } from './restcountryapi/restcountryapi.component';

@NgModule({
  declarations: [
    AppComponent,
    RestcountryapiComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
