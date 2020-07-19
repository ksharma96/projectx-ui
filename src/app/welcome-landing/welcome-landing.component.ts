import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome-landing',
  templateUrl: './welcome-landing.component.html',
  styleUrls: ['./welcome-landing.component.css']
})
export class WelcomeLandingComponent implements OnInit {

  showSignupClicked=false;

  constructor() { }

  ngOnInit(): void {
  }

  clickedSignUp() {
    this.showSignupClicked=true;
  }

  goHome() {
    this.showSignupClicked=false;
  }



}
