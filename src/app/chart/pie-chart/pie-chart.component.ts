import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { BaseChartDirective } from 'ng2-charts';
import { ChartOptions } from 'chart.js';
import { Dataset } from '../../type/dataset.type';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  imports: [BaseChartDirective],
})
export class PieChartComponent implements OnInit, OnChanges {
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

  ngOnChanges(changes: SimpleChanges) {
    if (changes['title']) {
      const text = changes['title'].currentValue;
      this.chartOptions = {
        ...this.chartOptions,
        plugins: {
          ...this.chartOptions.plugins?.title,
          title: { ...this.chartOptions.plugins?.title, text },
        },
      };
    }
  }
}
