import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import {Todo} from '../todo';

@Component({
  selector: 'app-childtodo',
  templateUrl: './childtodo.component.html',
  styleUrls: ['./childtodo.component.css']
})
export class ChildtodoComponent implements OnInit {

  @Input() childData:Todo;

  @Output () testEvent = new EventEmitter<any>();

  constructor() { }

  maddtocart()
  {
    this.testEvent.emit("testing testing");
  }
  ngOnInit() {
  }

}
