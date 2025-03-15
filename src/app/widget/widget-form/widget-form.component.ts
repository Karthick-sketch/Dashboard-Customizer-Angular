import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChartTypes } from '../../enum/chart-types.enum';
import { ChartTypeModel } from '../../model/chart-type.model';
import { WidgetModel } from '../../model/widget.model';
import { ChartComponent } from '../../chart/chart.component';
import { FileContent } from '../../model/file-content.model';

type CustomData = {
  id: number;
  label: string;
  data: number;
};

@Component({
  selector: 'app-widget-form',
  templateUrl: './widget-form.component.html',
  styleUrl: './widget-form.component.css',
  imports: [FormsModule, ChartComponent],
})
export class WidgetFormComponent implements OnInit {
  chartTypes: ChartTypeModel[];
  dataPreference!: string;
  customData!: CustomData[];
  filename = 'file';
  files!: FileContent[];
  headers!: string[];
  fileLabelColumn!: string[];
  fileDataColumn!: string[];

  @Input() widget!: WidgetModel;

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
    this.customData = [{ id: 0, label: '', data: 0 }];
  }

  ngOnInit() {
    if (this.widget) {
      let data = this.widget.datasets[0].data;
      this.customData = this.widget.labels.map((label, i) => {
        return {
          id: i,
          label: label,
          data: data[i],
        };
      });
    } else {
      this.widget = new WidgetModel();
    }
  }

  closeWidgetForm() {
    this.initialize();
    this.widgetFormClose.emit();
  }

  addWidget() {
    this.widgetFormData.emit(this.widget);
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

  changeLabel() {
    this.customData.forEach((cd, i) => {
      try {
        if (i < this.widget.labels.length) {
          this.widget.labels[i] = cd.label;
        } else {
          this.widget.labels.push(cd.label);
        }
      } catch (error) {
        console.log(this.widget.labels);
      }
    });
    this.widget.labels = [...this.widget.labels];
  }

  changeData() {
    const data = new Array<number>();
    for (const cd of this.customData) {
      data.push(cd.data);
    }
    this.widget.datasets = [{ data: data }];
  }
}
