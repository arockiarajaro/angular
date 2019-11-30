import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-officeaddress1',
  templateUrl: './officeaddress1.component.html',
  styleUrls: ['./officeaddress1.component.css']
})
export class Officeaddress1Component implements OnInit {

  childAddress:string;
  childID:number;
  constructor(private route:ActivatedRoute) { 
this.childAddress = this.route.snapshot.params.address;
this.childID = this.route.snapshot.params.id;
  }

  ngOnInit() {
  }

}
