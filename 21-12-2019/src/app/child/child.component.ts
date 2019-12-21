import { Component, OnInit,Input,Output,EventEmitter,OnDestroy } from '@angular/core';
import {UserService} from '../user.service'
import {SubSink} from 'subsink'

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent implements OnInit,OnDestroy {

  @Input() childaddress: any;
  @Input() title :any;

  @Output() changevalue = new EventEmitter;

  getUserList:any
  address:string;
  title1:any;

  subscruibeAPI:SubSink;
  nameList:Array<string>;
  constructor(private userService:UserService) { 
    this.nameList  = ['Apple', 'Orange', 'Banana'];
  }

  ngOnInit() {
   this.userService.getMess().subscribe((data)=>{
     this.title1 = data
   })
    console.log(this.childaddress)
    this.address=this.childaddress
    this.title1=this.title
  }
  ngOnDestroy()
  {
  }
  onclick()
  {
    this.changevalue.emit("test Address");
  }

}
