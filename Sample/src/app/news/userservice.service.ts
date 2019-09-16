import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

  constructor(private http :HttpClient) { }

  getUsers()
  {
   return this.http.get("https://jsonplaceholder.typicode.com/posts");
  }
  getSessionData()
  {
    return this.http.get("http://demo3872473.mockable.io/sessions");
  }
}
