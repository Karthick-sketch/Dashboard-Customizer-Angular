import { Component, OnInit } from '@angular/core';
import { WidgetFormComponent } from './widget-form/widget-form.component';
import { ChartTypes } from '../enum/chart-types.enum';
import { WidgetModel } from '../model/widget.model';
import { WidgetService } from './widget.service';
import { ChartComponent } from '../chart/chart.component';

@Component({
  selector: 'app-widget',
  templateUrl: './widget.component.html',
  styleUrl: './widget.component.css',
  imports: [WidgetFormComponent, ChartComponent],
})
export class WidgetComponent implements OnInit {
  chartTypes = ChartTypes;
  widgets = new Array<WidgetModel>();
  optionClickedWidget = '';
  widgetToEdit?: WidgetModel;
  isWidgetFormOpen = false;

  constructor(private widgetService: WidgetService) {}

  ngOnInit() {
    this.widgetService.getWidgets().subscribe((widgetModels) => {
      this.widgets = this.widgets.concat(widgetModels);
    });
  }

  openWidgetForm() {
    this.isWidgetFormOpen = true;
  }

  closeWidgetForm() {
    this.isWidgetFormOpen = false;
    this.widgetToEdit = undefined;
  }

  addWidget(widget: WidgetModel) {
    if (this.widgetToEdit) {
      this.widgetService.updateWidget(widget).subscribe((widgetModel) => {
        this.widgets[this.widgets.indexOf(widget)] = widgetModel;
      });
    } else {
      this.widgetService.createWidget(widget).subscribe((widgetModel) => {
        this.widgets.push(widgetModel);
      });
    }
  }

  clickOption(id?: string) {
    this.optionClickedWidget = id && id !== this.optionClickedWidget ? id : '';
  }

  editWidget(widget: WidgetModel) {
    this.widgetToEdit = widget;
  }

  deleteWidget(widget: WidgetModel) {
    if (widget.id) {
      this.widgetService.deleteWidget(widget.id).subscribe(() => {
        this.widgets.splice(this.widgets.indexOf(widget), 1);
      });
    }
  }
}
