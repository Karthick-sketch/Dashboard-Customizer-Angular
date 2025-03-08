import { Component, ViewChild } from '@angular/core';
import { BaseChartDirective } from 'ng2-charts';
import { ChartOptions } from 'chart.js';
import { WidgetFormComponent } from './widget-form/widget-form.component';
import { ChartDataModel } from '../model/chart-data.model';

@Component({
  selector: 'app-widget',
  templateUrl: './widget.component.html',
  styleUrl: './widget.component.css',
  imports: [WidgetFormComponent, BaseChartDirective],
})
export class WidgetComponent {
  pieChartLabels = new Array<string>();
  pieChartDatasets = new Array<{ data: number[] }>();
  pieChartOptions: ChartOptions<'pie'> = {
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
  pieChartLegend = true;
  pieChartPlugins = new Array();

  constructor() {}

  addWidget(widget: ChartDataModel) {
    this.pieChartOptions.plugins!.title!.text = widget.title;
    this.pieChartLabels = this.pieChartLabels.concat(widget.label);
    this.pieChartDatasets.push({ data: widget.data });
  }
}
