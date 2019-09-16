import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms'
import { Department } from 'src/models/department.model';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

  gender = "male";
  isActive = "true";
  department="3";
  previewPhoto = false; 
  dateOfBirth: Date = new Date(1992, 4, 30);
  datePickerConfig: Partial <BsDatepickerConfig>;

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
        showWeekNumbers: false,
        minDate: new Date(2018, 0, 1),
        maxDate: new Date(2018, 11, 31),
        dateInputFormat: 'DD/MM/YYYY'
      });
   
    }

    togglePhotoPreview(){
      this.previewPhoto = !this.previewPhoto ;
    }

  ngOnInit() {
  }

  saveEmployee(empForm: NgForm) : void {
    console.log(empForm);
  }

}
