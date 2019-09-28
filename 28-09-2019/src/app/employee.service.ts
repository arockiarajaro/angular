import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {updateEmployee} from './updateEmployee'
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http:HttpClient) { }

  getEmployee()
  {
    return this.http.get("http://dummy.restapiexample.com/api/v1/employees");
  }
  updateEmployee(emp:updateEmployee,id:any)
  {
    return this.http.put("http://dummy.restapiexample.com/api/v1/update/"+id,emp);
  }
  CreateEmployee(emp:updateEmployee)
  {
  return this.http.post("http://dummy.restapiexample.com/api/v1/create",emp);
  }
  deleteUser(id:number)
  {
    return this.http.delete("http://dummy.restapiexample.com/api/v1/delete/"+id);
  }
}
