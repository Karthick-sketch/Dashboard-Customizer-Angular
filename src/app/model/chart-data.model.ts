export class ChartDataModel {
  title: string;
  label: string[];
  data: number[];

  constructor(title: string, label: string[], data: number[]) {
    this.title = title;
    this.label = label;
    this.data = data;
  }
}
