import { Component, OnInit, Input } from '@angular/core';

import { Employee } from './../../model/employee';

@Component({
  selector: 'data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent implements OnInit {

  @Input("employees") employees: Employee[];

  constructor() { }

  ngOnInit() { }

}
