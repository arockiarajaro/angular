import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {UpdateEmployee} from '../update-employee';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  baseURL:string = "https://jsonplaceholder.typicode.com/";
  constructor(private http:HttpClient) { 

  }

  getTodos()
  {
    return this.http.get(this.baseURL+"todos");
  }

  CreateEmployee(emp:UpdateEmployee)
  {
  return this.http.post("http://dummy.restapiexample.com/api/v1/create",emp);
  }

}
