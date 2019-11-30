import { Component, OnInit } from '@angular/core';
import {UsersService} from '../services/users.service'; 
import {Todo} from '../todo';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  todos:any;
  name:string;
  todoAddress:Todo[];
todo :Todo;
imagepath:any;
  constructor(private userService:UsersService) {

    //this.userService.getTodos().subscribe(data=>{
     // this.todos = data;
    //  this.name="chennai";
   // });
   this.todoAddress = []
   }
   add()
   {
     this.todo = new Todo();
     this.todoAddress.push(this.todo);
   }
   changeValue(aa:any)
   {
this.name = aa;
   }


   filechange(files:any)
   {
    var fileReader = new FileReader();
    //this.imagepath = files[0];
    fileReader.readAsDataURL(files[0]);
    fileReader.onload=()=>{
      this.imagepath= fileReader.result;
      console.log(this.imagepath);
    }

   }
  ngOnInit() {
  }

}
