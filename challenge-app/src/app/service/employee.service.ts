import { Injectable, EventEmitter } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import { EMPLOYEE_ENDPOINT } from '../app.properties';
import { Employee } from './../model/employee';
// import 'rxjs/add/operator/map';

@Injectable()
export class EmployeeService {

  employeesChange = new EventEmitter();

  constructor(private _http: Http) { }

  getEmployees(): Observable<Employee[]> {
    return this._http
      .get(EMPLOYEE_ENDPOINT)
      .map(response => response.json() as Employee[] || [])
      .catch((error) => {
        console.error(error);
        return Observable.throw('Não foi possível carregar os dados.');
      });
  }

  saveEmployee(employee: Employee) {
    return this._http
      .post(EMPLOYEE_ENDPOINT, employee)
      .catch((error) => {
        console.error(error);
        let message = [{ errors: 'Não foi possível salvar os dados.' }];
        if (error.status == 400) {
          message = JSON.parse(error._body);
        }
        return Observable.throw(message);
      })
      .finally(() => {
        this.employeesChange.emit('employees updated');
      });
  }

}
