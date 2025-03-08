import { Component } from '@angular/core';
import { WidgetFormComponent } from './widget-form/widget-form.component';
import { ChartDataModel } from '../model/chart-data.model';
import { ChartTypes } from '../enum/chart-types.enum';
import { WidgetModel } from '../model/widget.model';
import { PieChartComponent } from '../chart/pie-chart/pie-chart.component';

@Component({
  selector: 'app-widget',
  templateUrl: './widget.component.html',
  styleUrl: './widget.component.css',
  imports: [WidgetFormComponent, PieChartComponent],
})
export class WidgetComponent {
  chartTypes = ChartTypes;
  widgets = new Array<WidgetModel>();

  constructor() {
    const title = 'Game Story Votes';
    const labels = ['The Last of Us', 'Dead Space', 'Max Payne 3'];
    const datasets = [{ data: [76, 10, 15] }];
    this.widgets.push(
      new WidgetModel(title, this.chartTypes.PIE, labels, datasets),
    );
    this.widgets.push(
      new WidgetModel(title, this.chartTypes.PIE, labels, datasets),
    );
    this.widgets.push(
      new WidgetModel(title, this.chartTypes.PIE, labels, datasets),
    );
  }

  addWidget(widget: ChartDataModel) {
    this.widgets.push(
      new WidgetModel(widget.title, widget.type, widget.label, widget.dataset),
    );
  }
}
