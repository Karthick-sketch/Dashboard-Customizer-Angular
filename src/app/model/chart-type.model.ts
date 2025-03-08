import { ChartTypes } from '../enum/chart-types.enum';

export class ChartTypeModel {
  id: number;
  label: string;
  value: ChartTypes;

  constructor(id: number, label: string, value: ChartTypes) {
    this.id = id;
    this.label = label;
    this.value = value;
  }
}
