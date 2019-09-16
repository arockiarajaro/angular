import { Component, OnInit } from '@angular/core';
import {User} from './user'
import {UserserviceService} from './userservice.service'
import { analyzeAndValidateNgModules } from '@angular/compiler';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
users:User[];
sessionData:any;
  constructor(private userservice:UserserviceService) {
    this.userservice.getUsers().subscribe((data:User[])=>{this.users=data})
    this.userservice.getSessionData().subscribe((data:any)=>{this.sessionData=data});
    debugger;
   }

  ngOnInit() {
  }
  onEdit(editeduser:User)
  {
var aa=editeduser;
debugger;
  }

}