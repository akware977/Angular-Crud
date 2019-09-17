import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms'
import { Department } from 'src/models/department.model';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { Employee } from '../models/employee.model';
import { Employee } from 'src/models/employee.model';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

  /*gender = "male";
  isActive = "true";
  department="3";
  dateOfBirth: Date = new Date(1992, 4, 30);*/
  previewPhoto = false; 
  datePickerConfig: Partial <BsDatepickerConfig>;
  employee: Employee = {
    id : null,
    name : null,
    gender : null,
    contactPreference : null,
    phoneNumber : null,
    email : null,
    dateOfBirth : null,
    department : null,
    isActive : null,
    photoPath : null
  };

  departments: Department [] = [
    { id: 1, name: 'Help Desk' },
    { id: 2, name: 'HR Desk' },
    { id: 3, name: 'IT Desk' },
    { id: 4, name: 'Payroll Desk' },
    { id: 5, name: 'Admin Desk' }
  ]

  constructor() {
    this.datePickerConfig = Object.assign({ } , 
      { 
        containerClass:'theme-dark-blue', 
        dateInputFormat: 'DD/MM/YYYY'
      });
   
    }

    togglePhotoPreview(){
      this.previewPhoto = !this.previewPhoto ;
    }

  ngOnInit() {
  }

  saveEmployee(newEmployee: Employee) : void {
    console.log(newEmployee);
  }

}
