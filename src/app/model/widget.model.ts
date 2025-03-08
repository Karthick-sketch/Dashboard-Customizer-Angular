import { ChartTypes } from '../enum/chart-types.enum';
import { Dataset } from '../type/dataset.type';

export class WidgetModel {
  id?: number;
  title: string;
  chartType: ChartTypes;
  labels: string[];
  datasets: Dataset[];

  constructor(
    title: string,
    chartType: ChartTypes,
    labels: string[],
    datasets: Dataset[]
  ) {
    this.title = title;
    this.chartType = chartType;
    this.labels = labels;
    this.datasets = datasets;
  }
}
