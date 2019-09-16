import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
id:any;
name:any;
address:any;
testDate:Date;
  constructor() {
    this.id=1;
    this.name="Testing App";
    this.address="Bangalore";
    this.testDate=new Date;
   }

  ngOnInit() {
  }
  onClick()
  {
   this.name="Chennai";
  }

}
