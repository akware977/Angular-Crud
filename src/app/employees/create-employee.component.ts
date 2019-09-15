import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms'
import { Department } from 'src/models/department.model';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

  gender = "male";
  isActive = "true";
  department="3";

  departments: Department [] = [
    { id: 1, name: 'Help Desk' },
    { id: 2, name: 'HR Desk' },
    { id: 3, name: 'IT Desk' },
    { id: 4, name: 'Payroll Desk' },
    { id: 5, name: 'Admin Desk' }
  ]

  constructor() { }

  ngOnInit() {
  }

  saveEmployee(empForm: NgForm) : void {
    console.log(empForm);
  }

}
