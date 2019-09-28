import { Component, OnInit } from '@angular/core';
import {EmployeeService} from "../employee.service"
import {employee} from '../employee';
import {updateEmployee} from '../updateEmployee';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  employeeList:employee[];
  EditedEmployee:employee;
  updateEmp:updateEmployee;
  isVisible:any;
  alertMessage:string;
  alertType:string;
  constructor(private empService:EmployeeService) { 
    this.EmployeeListBind();
  }
  setAlert(mesage:string,type:number)
  {
    this.alertMessage=mesage;
    if(type==1)
    {
      this.alertType="success";
    }
    if(type==2)
    {
      this.alertType="warning";
    }
    else
    {
  this.alertType="success";
    }

    this.isVisible=true;
  }
  close()
  {
    this.isVisible=false;
  }
  EmployeeListBind()
  {
    this.EditedEmployee= new employee();
    this.empService.getEmployee().subscribe((data:employee[])=>{
      this.employeeList=data
    });
  }
  edit(Editededemployee:employee)
  {
 this.EditedEmployee={...Editededemployee};
  }
  update()
  {
    this.updateEmp = new updateEmployee();

this.updateEmp.age=this.EditedEmployee.employee_age;
this.updateEmp.name=this.EditedEmployee.employee_name;
this.updateEmp.salary=this.EditedEmployee.employee_salary;

this.empService.updateEmployee(this.updateEmp,this.EditedEmployee.id).subscribe((data:any)=>{
  this.EmployeeListBind();
});
this.setAlert("User Details Updated Successfully",1);

  }
  ngOnInit() {
  }

  create()
  {
    this.updateEmp = new updateEmployee();

    this.updateEmp.age=this.EditedEmployee.employee_age;
    this.updateEmp.name=this.EditedEmployee.employee_name;
    this.updateEmp.salary=this.EditedEmployee.employee_salary;

    this.empService.CreateEmployee(this.updateEmp).subscribe((data:any)=>{
      this.EmployeeListBind();
      alert("user created Successfully");
    });
    
  }
  delete(id:number)
  {
    this.empService.deleteUser(id).subscribe((data:any)=>{
      this.EmployeeListBind();
    });
    this.setAlert("User Details Deleted Successfully",2);
  }

}
