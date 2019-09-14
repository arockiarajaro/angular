import { Component, OnInit } from '@angular/core';
import {User} from './user'
import {UserserviceService} from './userservice.service'

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
users:User[];
  constructor(private userservice:UserserviceService) {
    this.userservice.getUsers().subscribe((data:User[])=>{this.users=data})
   }

  ngOnInit() {
  }
  onEdit(editeduser:User)
  {
var aa=editeduser;
debugger;
  }

}
