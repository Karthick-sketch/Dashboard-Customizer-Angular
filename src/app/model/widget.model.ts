import { ChartTypes } from '../enum/chart-types.enum';
import { Dataset } from '../type/dataset.type';

export class WidgetModel {
  id?: string;
  title!: string;
  chartType!: ChartTypes;
  labels!: string[];
  datasets!: Dataset[];

  constructor() {
    this.title = '';
    this.chartType = ChartTypes.PIE;
    this.labels = [];
    this.datasets = [];
  }
}
