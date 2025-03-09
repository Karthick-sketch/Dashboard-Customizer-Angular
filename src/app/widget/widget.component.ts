import { Component, OnInit } from '@angular/core';
import { WidgetFormComponent } from './widget-form/widget-form.component';
import { ChartTypes } from '../enum/chart-types.enum';
import { WidgetModel } from '../model/widget.model';
import { PieChartComponent } from '../chart/pie-chart/pie-chart.component';
import { LineChartComponent } from '../chart/line-chart/line-chart.component';
import { WidgetService } from './widget.service';

@Component({
  selector: 'app-widget',
  templateUrl: './widget.component.html',
  styleUrl: './widget.component.css',
  imports: [WidgetFormComponent, PieChartComponent, LineChartComponent],
})
export class WidgetComponent implements OnInit {
  chartTypes = ChartTypes;
  widgets = new Array<WidgetModel>();

  constructor(private widgetService: WidgetService) {}

  ngOnInit() {
    this.widgetService.getWidgets().subscribe((widgetModels) => {
      this.widgets = this.widgets.concat(widgetModels);
    });
  }

  addWidget(widget: WidgetModel) {
    this.widgetService.createWidget(widget).subscribe((widgetModel) => {
      this.widgets.push(widgetModel);
    });
  }
}
