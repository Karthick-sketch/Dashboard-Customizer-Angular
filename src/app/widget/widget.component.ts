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
  isOptionClicked = false;

  constructor(private widgetService: WidgetService) {
    const title = 'Game Story Votes';
    const labels = ['The Last of Us', 'Dead Space', 'Max Payne 3'];
    const datasets = [{ data: [76, 10, 15] }];
    this.widgets.push(
      new WidgetModel(title, this.chartTypes.PIE, labels, datasets),
      new WidgetModel(title, this.chartTypes.PIE, labels, datasets),
    );
  }

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

  clickOption() {
    this.isOptionClicked = !this.isOptionClicked;
  }
}
