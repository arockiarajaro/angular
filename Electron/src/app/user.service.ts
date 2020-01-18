import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient,HttpHeaders} from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};
@Injectable({
  providedIn: 'root'
})
export class UserService {
dt:Date;
  constructor(private http : HttpClient) { }

  getDate():any
  {
var dd=new Observable(observer=>{setInterval(()=>{observer.next(this.dt=new Date())},10000)});
return dd;
  }
  getUser()
  {
    httpOptions.headers.append('Access-Control-Allow-Origin', '*');
    httpOptions.headers.append('Access-Control-Allow-Methods', 'GET, POST,PUT,DELETE');
    httpOptions.headers.append('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    httpOptions.headers.append('Access-Control-Allow-Credentials', 'true');

return this.http.get("http://localhost/api/api/User",);
  }
  validateUser()
  {
    return 10;
  }
}
