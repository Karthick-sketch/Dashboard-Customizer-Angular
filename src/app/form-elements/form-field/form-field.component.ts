import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-form-field',
  templateUrl: './form-field.component.html',
  styleUrl: './form-field.component.css',
})
export class FormFieldComponent {
  @Input() inputId!: string;
  @Input() type = 'text';
  @Input() title!: string;
  @Input() className = '';
}
