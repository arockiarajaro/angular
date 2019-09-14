import { Component, OnInit,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-about-details',
  templateUrl: './about-details.component.html',
  styleUrls: ['./about-details.component.css']
})
export class AboutDetailsComponent implements OnInit {
name:string;
  @Output() update= new EventEmitter<string>();
  constructor() {
    this.name="Arockia";
   }

  ngOnInit() {
  }
  onClick()
  {
  this.update.emit(this.name);
  }

}
