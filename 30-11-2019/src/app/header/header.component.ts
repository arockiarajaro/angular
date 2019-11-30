import { Component, OnInit } from '@angular/core';
import {MessageService} from '../message.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  message:string;
  constructor(private messageservice:MessageService) {

    this.messageservice.notificationMessage.subscribe(data=>{
     alert(data);
    });
   }

  ngOnInit() {
  }

}
