import { Component } from '@angular/core';
import { WidgetFormComponent } from './widget-form/widget-form.component';
import { ChartDataModel } from '../model/chart-data.model';
import { ChartTypes } from '../enum/chart-types.enum';
import { WidgetModel } from '../model/widget.model';
import { PieChartComponent } from '../chart/pie-chart/pie-chart.component';
import { LineChartComponent } from '../chart/line-chart/line-chart.component';
import { Dataset } from '../type/dataset.type';

@Component({
  selector: 'app-widget',
  templateUrl: './widget.component.html',
  styleUrl: './widget.component.css',
  imports: [WidgetFormComponent, PieChartComponent, LineChartComponent],
})
export class WidgetComponent {
  chartTypes = ChartTypes;
  widgets = new Array<WidgetModel>();

  constructor() {
    const title1 = 'Game Story Votes';
    const labels1 = ['The Last of Us', 'Dead Space', 'Max Payne 3'];
    const datasets1 = [{ data: [76, 10, 15] }];

    const title2 = 'Monthly Sales';
    const labels2 = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
    ];
    const datasets2: Dataset[] = [
      {
        data: [65, 59, 80, 81, 56, 55, 40],
        label: 'Series A',
        fill: true,
        tension: 0.5,
        borderColor: 'black',
        backgroundColor: 'rgba(255,0,0,0.3)',
      },
    ];

    const widget1 = new WidgetModel(
      title1,
      this.chartTypes.PIE,
      labels1,
      datasets1,
    );
    widget1.id = 1;
    this.widgets.push(widget1);
    const widget2 = new WidgetModel(
      title2,
      this.chartTypes.LINE,
      labels2,
      datasets2,
    );
    widget2.id = 2;
    this.widgets.push(widget2);
  }

  addWidget(widget: ChartDataModel) {
    this.widgets.push(
      new WidgetModel(widget.title, widget.type, widget.label, widget.dataset),
    );
  }
}
