import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

    firstname:string;
    lastname:string;
    username:string;
    address:string;
    email:string;
    password:string;


  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
  }

  register() {
    let url = "http://localhost:8080/user/add"
    const body = {
      username:this.username,
      password:this.password,
      firstname:this.firstname,
      lastname:this.lastname,
      email:this.email
    }
    console.log(body);
    this.httpClient.post(url, body, {responseType:'text'}).subscribe(data=>{
        console.log(data);
    });
  }
}

