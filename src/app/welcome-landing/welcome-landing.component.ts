import { SpinnerService } from './../services/spinner-service/spinner.service';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-welcome-landing',
  templateUrl: './welcome-landing.component.html',
  styleUrls: ['./welcome-landing.component.css']
})
export class WelcomeLandingComponent implements OnInit {

  username:String;
  password:String;

  showSpinner:Boolean;

  constructor(private spinnerService:SpinnerService,
    private httpClient:HttpClient) { }

  ngOnInit(): void {
  }

  async login(){
     this.showSpinner=true;
     await this.delay(200);
    this.showSpinner=false;

  }


  delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
    }

}
