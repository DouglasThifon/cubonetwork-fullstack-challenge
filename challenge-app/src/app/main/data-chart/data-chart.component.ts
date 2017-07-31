import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'data-chart',
  templateUrl: './data-chart.component.html',
  styleUrls: ['./data-chart.component.css']
})
export class DataChartComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  type: string = 'doughnut';
  data: number[] = [50];
  labels: string[] = ['Jefferson Martins'];
  options: any = {
    legend: {
      position: 'right'
    }
  };
}
