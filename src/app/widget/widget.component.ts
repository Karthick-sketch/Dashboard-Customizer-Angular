import { Component } from '@angular/core';
import { ChartTypeModel } from '../models/chart-type.model';
import { FormSelectComponent } from '../form-elements/form-select/form-select.component';
import { FormFieldComponent } from '../form-elements/form-field/form-field.component';
import { FormActionButtonsComponent } from '../form-elements/form-action-buttons/form-action-buttons.component';

@Component({
  selector: 'app-widget',
  templateUrl: './widget.component.html',
  styleUrl: './widget.component.css',
  imports: [
    FormFieldComponent,
    FormSelectComponent,
    FormActionButtonsComponent,
  ],
})
export class WidgetComponent {
  customData = [{ id: 0, label: '', data: '' }];

  isWidgetFormOpen: boolean;
  chartTypes: ChartTypeModel[];

  constructor() {
    this.isWidgetFormOpen = false;
    this.chartTypes = [
      {
        id: 1,
        label: 'Pie-Chart',
        value: 'piechart',
      },
      {
        id: 2,
        label: 'Line-Chart',
        value: 'linechart',
      },
    ];
  }

  openWidgetForm() {
    this.isWidgetFormOpen = true;
  }

  closeWidgetForm() {
    this.isWidgetFormOpen = false;
  }

  addWidget() {
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
