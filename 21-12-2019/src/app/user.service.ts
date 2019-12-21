import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {Subject} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  message = new Subject<any>();

  constructor(private http:HttpClient) { }

  getUser()
  {
    return this.http.get("https://jsonplaceholder.typicode.com/todos");
  }

  pushMess(aa:any)
  {
    this.message.next(aa)
  }
  getMess()
  {
    return this.message.asObservable();
  }
}
