import { Component, OnInit } from '@angular/core';

import { Employee } from './../model/employee';
import { EmployeeService } from './../service/employee.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  employee: Employee = new Employee();
  errorMessage: string = '';

  constructor(private employeeService: EmployeeService) { }

  ngOnInit() { }

  enviarEmployee() {
    this.employeeService.saveEmployee(this.employee)
      .subscribe(() => {
        this.employee = new Employee();
        this.errorMessage = '';
      }, err => {
        this.errorMessage = err.errors;
      });
  }

}
