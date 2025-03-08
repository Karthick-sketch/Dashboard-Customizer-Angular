import { ChartTypes } from '../enum/chart-types.enum';
import { Dataset } from '../type/dataset.type';

export class ChartDataModel {
  title: string;
  type: ChartTypes;
  label: string[];
  dataset: Dataset[];

  constructor(
    title: string,
    type: ChartTypes,
    label: string[],
    dataset: Dataset[]
  ) {
    this.title = title;
    this.type = type;
    this.label = label;
    this.dataset = dataset;
  }
}
