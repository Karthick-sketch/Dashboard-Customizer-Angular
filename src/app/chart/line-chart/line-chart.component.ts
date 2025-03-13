import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { BaseChartDirective } from 'ng2-charts';
import { ChartConfiguration, ChartOptions } from 'chart.js';
import { Dataset } from '../../type/dataset.type';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  imports: [BaseChartDirective],
})
export class LineChartComponent implements OnInit, OnChanges {
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
    } else if (changes['labels']) {
      const labels = changes['labels'].currentValue;
      this.data = {
        ...this.data,
        labels: [...labels],
      };
    } else if (changes['datasets']) {
      const datasets = changes['datasets'].currentValue;
      this.data = {
        ...this.data,
        datasets: [...datasets],
      };
    }
  }
}
