import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChartTypes } from '../../enum/chart-types.enum';
import { ChartTypeModel } from '../../model/chart-type.model';
import { WidgetModel } from '../../model/widget.model';

@Component({
  selector: 'app-widget-form',
  templateUrl: './widget-form.component.html',
  styleUrl: './widget-form.component.css',
  imports: [FormsModule],
})
export class WidgetFormComponent implements OnChanges {
  title = '';
  chartType = ChartTypes.PIE;
  customData = [{ id: 0, label: '', data: '' }];

  @Input() widget?: WidgetModel;

  @Output() widgetFormData = new EventEmitter<WidgetModel>();

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

  ngOnChanges(changes: SimpleChanges) {
    if (changes['widget']) {
      this.widget = changes['widget'].currentValue;
      if (this.widget) {
        this.title = this.widget.title;
        this.chartType = this.widget.chartType;

        let labels = this.widget.labels;
        let data = this.widget.datasets[0].data;
        this.customData = [];
        for (let i = 0; i < this.widget.labels.length; i++) {
          this.customData.push({
            id: i,
            label: labels[i],
            data: String(data[i]),
          });
        }
        this.openWidgetForm();
      }
    }
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
    const labels = new Array<string>();
    const data = new Array<number>();
    for (const cd of this.customData) {
      labels.push(cd.label);
      data.push(Number(cd.data));
    }
    this.widgetFormData.emit(
      new WidgetModel(this.title, this.chartType, labels, [{ data: data }]),
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
