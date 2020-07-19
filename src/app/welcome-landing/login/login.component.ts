import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username:string;
  password:string;

  jsonData:JSON;

  username_get:string

  routeToUserSession=false;

  constructor(private httpClient:HttpClient) { }

  ngOnInit(): void {
  }
  login() {
    let received_username:string;
    let receieved_password:string;
    let url = "http://localhost:8080/user/getUserByUsername"
    this.httpClient.post<JSON>(url, this.username).subscribe(data=>{
        if (Object.keys(data).length!=0) {
            received_username = data[0].username;
            receieved_password = data[0].password;
            if (receieved_password == this.password) {
              this.routeToUserSession=true;
              console.log('LOGGED IN to User Session!');
            }
            else {
              console.log('Incorrect password')
            }
        }
        else {
          console.log('User not found')
        }

    });

  }

}
