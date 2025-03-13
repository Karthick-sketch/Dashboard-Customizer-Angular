import { Component, Input } from '@angular/core';
import { WidgetModel } from '../model/widget.model';
import { ChartTypes } from '../enum/chart-types.enum';
import { PieChartComponent } from './pie-chart/pie-chart.component';
import { LineChartComponent } from './line-chart/line-chart.component';
import { ChartSize } from '../type/chart-size.type';

@Component({
  selector: 'app-chart',
  imports: [PieChartComponent, LineChartComponent],
  templateUrl: './chart.component.html',
  styleUrl: './chart.component.css',
})
export class ChartComponent {
  chartTypes = ChartTypes;

  @Input() size!: ChartSize;
  @Input() widget!: WidgetModel;
}
