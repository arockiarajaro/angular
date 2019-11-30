import { Component, OnInit } from '@angular/core';
import {User} from '../user'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  name:any;
  address:string;
  phoneno:number;
btnText:string;
  users:User[];
  user:User;
  constructor() { 
    this.btnText="Add User"
    this.name="Sample Application";
    this.address="Sample Address";
    this.phoneno=1234567890;
    this.users=[];
    this.user = new User();
    this.user.id=1;
    this.user.name="AName";
    this.user.address="AAddress";
    this.user.phone="A11";
    this.users.push(this.user);

    this.user = new User();
    this.user.id=2;
    this.user.name="BName";
    this.user.address="BAddress";
    this.user.phone="B11";
    this.users.push(this.user);

    this.user = new User();
    this.user.id=3;
    this.user.name="CName";
    this.user.address="CAddress";
    this.user.phone="C11";
    this.users.push(this.user);

    this.user = new User();
    this.user.id=4;
    this.user.name="DName";
    this.user.address="DAddress";
    this.user.phone="D11";
    this.users.push(this.user);

    this.user = new User();
    this.user.id=5;
    this.user.name="EName";
    this.user.address="EAddress";
    this.user.phone="E11";
    this.users.push(this.user);

    this.user = new User();
    this.user.id=6;
    this.user.name="FName";
    this.user.address="FAddress";
    this.user.phone="F11";
    this.users.push(this.user);

    this.user=new User();
  }

  ngOnInit() {
  }

  addUser()
  {
    
   // this.users.push(this.user);
   // this.user=new User();
   if(this.user.id >0)
   {
     console.log("Update User");
   }
   else
   {
     console.log("Add User");
   }
  }
  editUser(user:User)
  {
    this.btnText="Update User";
this.user={...user};
  }
  changeDetails()
  {
    this.name="Name changed";
  }
  deleteUser(user:any)
  {
  console.log(user);
  }

}
