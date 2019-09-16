import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  name:string;
  constructor() { 
    this.name="First Angular App";
  }

  ngOnInit() {
  }

  updateDate(nameDate:string)
  {
    this.name=nameDate;
  }

}
