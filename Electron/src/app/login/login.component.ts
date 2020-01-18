import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {UserService} from '../user.service';
import { Subject } from 'rxjs';
import {EncryptService} from '../encrypt.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  subject = new Subject<string>();
  uname:string;
  psw:string;
  isValidUser:boolean;
  ttt:Date;
  display:string;
  userID:number;
  constructor(private router:Router,private userService:UserService,private encService:EncryptService ) {
   
   }
   upload()
   {

   }
   
  ngOnInit() {
  }
 
  login()
  {
    console.log(this.uname);
    var enc=this.encService.encrypt(this.uname);
    console.log(enc);
    console.log(this.encService.decrypt(enc));
  }
}
