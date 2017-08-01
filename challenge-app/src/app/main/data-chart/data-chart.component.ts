import { Component, OnInit, Input, ViewChild, OnChanges } from '@angular/core';
import { BaseChartDirective } from 'ng2-charts'

import { Employee } from './../../model/employee';

@Component({
  selector: 'data-chart',
  templateUrl: './data-chart.component.html',
  styleUrls: ['./data-chart.component.css']
})
export class DataChartComponent implements OnInit, OnChanges {

  @Input('employees') employees: Employee[];
  @ViewChild(BaseChartDirective) chart: BaseChartDirective;

  type: string = 'doughnut';
  data: number[] = [];
  labels: string[] = [];
  options: any = {
    legend: {
      position: 'right'
    }
  };

  constructor() { }

  ngOnInit() { }

  ngOnChanges() {
    if (this.employees) {
      this.data.splice(0, this.data.length);
      this.labels.splice(0, this.labels.length);
      this.employees.forEach(employee => {
        this.data.push(employee.participation);
        this.labels.push(`${employee.name} ${employee.lastname}`);
      });
      this.chart.ngOnChanges({});
    }
  }

}
