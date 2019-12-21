import { Component } from '@angular/core';
import {UserService} from './user.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  address:string;
  title = 'hooks';

  constructor(private user:UserService)
  {
    this.address="Channai"

  }
  changeaddress(aa:any)
  {
    this.address=aa
  }
  onclick()
  {
    this.user.pushMess("Test Message")
  }
}
