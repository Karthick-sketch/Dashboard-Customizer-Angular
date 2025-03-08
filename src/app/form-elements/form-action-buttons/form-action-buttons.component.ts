import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-form-action-buttons',
  templateUrl: './form-action-buttons.component.html',
  styleUrl: './form-action-buttons.component.css',
})
export class FormActionButtonsComponent {
  @Input() title!: string;

  @Output() cancelClick = new EventEmitter<void>();
  @Output() submitClick = new EventEmitter<void>();

  handleCancel() {
    this.cancelClick.emit();
  }

  handleSubmit() {
    this.submitClick.emit();
  }
}
