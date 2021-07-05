import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
@Component({
  selector: 'lib',
  template: `
    <highcharts-chart
      [Highcharts]="Highcharts"
      [options]="chartOptions"

      style="width: 100%; height: 400px; display: block;"
    ></highcharts-chart>
  `,
  styles: [
  ]
})
export class LibComponent implements OnInit {
  Highcharts: typeof Highcharts = Highcharts;
  chartOptions: Highcharts.Options = {
    series: [{
      data: [1, 2, 3],
      type: 'line'
    }]
  };
  constructor() { }

  ngOnInit(): void {
  }

}
