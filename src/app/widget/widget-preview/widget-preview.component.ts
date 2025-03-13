import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ChartComponent } from '../../chart/chart.component';
import { WidgetModel } from '../../model/widget.model';

@Component({
  selector: 'app-widget-preview',
  imports: [ChartComponent],
  templateUrl: './widget-preview.component.html',
  styleUrl: './widget-preview.component.css',
})
export class WidgetPreviewComponent {
  size = {
    width: '686',
    height: '400',
  };

  @Input() widget!: WidgetModel;

  @Output() previewClose = new EventEmitter<void>();

  constructor() {}

  closePreview() {
    this.previewClose.emit();
  }
}
