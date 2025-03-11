import { Component, Input, OnInit } from '@angular/core';
import { BaseChartDirective } from 'ng2-charts';
import { ChartConfiguration, ChartOptions } from 'chart.js';
import { Dataset } from '../../type/dataset.type';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  imports: [BaseChartDirective],
})
export class LineChartComponent implements OnInit {
  @Input() title!: string;
  @Input() labels!: string[];
  @Input() datasets!: Dataset[];

  data: ChartConfiguration<'line'>['data'] = {
    labels: [],
    datasets: [],
  };
  chartOptions: ChartOptions<'line'> = {
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

  constructor() {}

  ngOnInit(): void {
    this.chartOptions.plugins!.title!.text = this.title;
    this.data.labels = this.data.labels?.concat(this.labels);
    this.data.datasets = this.data.datasets?.concat(this.datasets);
  }
}
