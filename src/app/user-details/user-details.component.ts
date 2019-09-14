import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

 @Input() userdetails:UserDt;
  constructor() { }

  ngOnInit() {
  }

}

export class UserDt{
  id:any;
  name:any;
  day:any;
  phone:any;
  time:any;
  appt:any;
}