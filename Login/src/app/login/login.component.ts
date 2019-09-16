import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  uname:string;
  psw:string;
  isValidUser:boolean;
  constructor(private router:Router) { }

  ngOnInit() {
  }
  login()
  {
    //need to call login API here to validate username and pass
    //if valid user then assign this variavle (isValidUser) value to true else false
    this.isValidUser=false;
    if(this.isValidUser)
    {
      localStorage.setItem("userID","1");
      this.router.navigateByUrl("home");
    }
    else
    {
      localStorage.removeItem("userID");
      alert("UserName or Pass Incorrect");
    }
  }

}
