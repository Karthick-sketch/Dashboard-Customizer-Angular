import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChartTypes } from '../../enum/chart-types.enum';
import { ChartTypeModel } from '../../model/chart-type.model';
import { WidgetModel } from '../../model/widget.model';

type CustomData = {
  id: number;
  label: string;
  data: number;
};

@Component({
  selector: 'app-widget-form',
  templateUrl: './widget-form.component.html',
  styleUrl: './widget-form.component.css',
  imports: [FormsModule],
})
export class WidgetFormComponent implements OnInit {
  title!: string;
  chartType!: ChartTypes;
  customData!: CustomData[];
  chartTypes: ChartTypeModel[];

  @Input() widget?: WidgetModel;

  @Output() widgetFormData = new EventEmitter<WidgetModel>();
  @Output() widgetFormClose = new EventEmitter<void>();

  constructor() {
    this.initialize();
    this.chartTypes = [
      {
        id: 1,
        label: 'Pie',
        value: ChartTypes.PIE,
      },
      {
        id: 2,
        label: 'Line',
        value: ChartTypes.LINE,
      },
    ];
  }

  private initialize() {
    this.title = '';
    this.chartType = ChartTypes.PIE;
    this.customData = [{ id: 0, label: '', data: 0 }];
  }

  ngOnInit() {
    if (this.widget) {
      this.title = this.widget.title;
      this.chartType = this.widget.chartType;
      let data = this.widget.datasets[0].data;
      this.customData = this.widget.labels.map((label, i) => {
        return {
          id: i,
          label: label,
          data: data[i],
        };
      });
    }
  }

  closeWidgetForm() {
    this.initialize();
    this.widgetFormClose.emit();
  }

  addWidget() {
    const labels = new Array<string>();
    const data = new Array<number>();
    for (const cd of this.customData) {
      labels.push(cd.label);
      data.push(cd.data);
    }
    if (this.widget) {
      this.widget.set(this.title, this.chartType, labels, [{ data: data }]);
      this.widgetFormData.emit(this.widget);
    } else {
      this.widgetFormData.emit(
        new WidgetModel(this.title, this.chartType, labels, [{ data: data }]),
      );
    }
    this.closeWidgetForm();
  }

  addCustomDataField() {
    this.customData.push({ id: this.customData.length, label: '', data: 0 });
  }

  deleteCustomDataField(index: number) {
    if (this.customData.length > 1) {
      this.customData.splice(index, 1);
    }
  }
}
