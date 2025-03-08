import { Component, EventEmitter, Output } from '@angular/core';
import { ChartTypeModel } from '../../model/chart-type.model';
import { ChartDataModel } from '../../model/chart-data.model';
import { FormsModule } from '@angular/forms';
import { ChartTypes } from '../../enum/chart-types.enum';

@Component({
  selector: 'app-widget-form',
  templateUrl: './widget-form.component.html',
  styleUrl: './widget-form.component.css',
  imports: [FormsModule],
})
export class WidgetFormComponent {
  chartType = ChartTypes.PIE;
  widgetTitle = '';
  customData = [{ id: 0, label: '', data: '' }];

  @Output() widgetFormData = new EventEmitter<ChartDataModel>();

  isWidgetFormOpen: boolean;
  chartTypes: ChartTypeModel[];

  constructor() {
    this.isWidgetFormOpen = false;
    this.chartTypes = [
      {
        id: 1,
        label: 'Pie-Chart',
        value: ChartTypes.PIE,
      },
      {
        id: 2,
        label: 'Line-Chart',
        value: ChartTypes.LINE,
      },
    ];
  }

  openWidgetForm() {
    this.isWidgetFormOpen = true;
  }

  closeWidgetForm() {
    this.customData.length = 0;
    this.customData = [{ id: 0, label: '', data: '' }];
    this.isWidgetFormOpen = false;
  }

  addWidget() {
    const label = new Array<string>();
    const data = new Array<number>();
    for (const cd of this.customData) {
      label.push(cd.label);
      data.push(Number(cd.data));
    }
    this.widgetFormData.emit(
      new ChartDataModel(this.widgetTitle, this.chartType, label, [
        { data: data },
      ]),
    );
    this.closeWidgetForm();
  }

  addCustomDataField() {
    this.customData.push({ id: this.customData.length, label: '', data: '' });
  }

  deleteCustomDataField(index: number) {
    if (this.customData.length > 1) {
      this.customData.splice(index, 1);
    }
  }
}
