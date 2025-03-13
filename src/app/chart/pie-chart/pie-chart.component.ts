import { Component, Input, OnInit } from '@angular/core';
import { BaseChartDirective } from 'ng2-charts';
import { ChartOptions } from 'chart.js';
import { Dataset } from '../../type/dataset.type';
import { ChartSize } from '../../type/chart-size.type';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  imports: [BaseChartDirective],
})
export class PieChartComponent implements OnInit {
  defaultSize = {
    width: '370',
    height: '400',
  };

  @Input() size!: ChartSize;
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
    if (this.size) {
      this.defaultSize.width = this.size.width;
      this.defaultSize.height = this.size.height;
    }
    this.chartOptions.plugins!.title!.text = this.title;
  }
}
