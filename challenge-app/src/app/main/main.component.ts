import { Component, OnInit } from '@angular/core';

import { Employee } from './../model/employee';
import { EmployeeService } from './../service/employee.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  employees: Employee[];
  errorMessage: string = '';

  constructor(private employeeService: EmployeeService) { }

  ngOnInit() {
    this.loadEmployees();
    this.employeeService.employeesChange.subscribe(() => this.loadEmployees());
  }

  private loadEmployees() {
    this.employeeService.getEmployees()
      .subscribe(
      employees => {
        this.employees = employees
        this.errorMessage = '';
      },
      error => {
        this.errorMessage = error;
      })
  }

}
