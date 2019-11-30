import { Component, OnInit } from '@angular/core';
import {UsersService} from './users.service'; 
import {Todo} from '../todo';
import {UpdateEmployee} from '../update-employee';
import {MessageService} from '../message.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

  todos:any;
  name:string;
  salary:string;
  age:string;
  message:string;
  updEmp:UpdateEmployee;

  constructor(private userService:UsersService,private messageService:MessageService) {
    this.userService.getTodos().subscribe(data=>{
      this.todos=data;
      console.log(this.todos);
      //call 
    },error=>{

    },()=>this.completetest()
   
    );

    this.messageService.notificationMessage.subscribe(data=>{
      this.message=data;
    })
   }
completetest()
{
  console.log("Get request Completed");
}
   create()
   {
    this.updEmp = new UpdateEmployee();
    this.updEmp.name=this.name;
    this.updEmp.salary= this.salary;
    this.updEmp.age = this.age;
    this.userService.CreateEmployee(this.updEmp).subscribe(data=>{
      console.log("Employee create Successfully");
    })
   }
  ngOnInit() {
  }
  createmessage()
  {
   localStorage.getItem("userid");
    this.messageService.notificationMessage.next(this.name);
  }

}
