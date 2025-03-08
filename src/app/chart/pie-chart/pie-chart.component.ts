import { Component, Input, OnInit } from '@angular/core';
import { BaseChartDirective } from 'ng2-charts';
import { ChartOptions } from 'chart.js';
import { ChartDataModel } from '../../model/chart-data.model';
import { Dataset } from '../../type/dataset.type';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  imports: [BaseChartDirective],
})
export class PieChartComponent implements OnInit {
  @Input() title!: string;
  @Input() labels!: string[];
  @Input() datasets!: Dataset[];

  chartOptions: ChartOptions<'pie'> = {
    responsive: false,
    plugins: {
      title: {
        display: true,
        text: '',
        font: {
          size: 14,
          weight: 'normal',
        },
        color: '#333',
      },
    },
  };
  legend = true;
  plugins = new Array();

  constructor() {}

  ngOnInit(): void {
    this.chartOptions.plugins!.title!.text = this.title;
  }
}
