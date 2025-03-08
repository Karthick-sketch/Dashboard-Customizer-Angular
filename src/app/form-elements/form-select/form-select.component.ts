import { Component, Input } from '@angular/core';
import { OptionModel } from '../../models/option.model';

@Component({
  selector: 'app-form-select',
  templateUrl: './form-select.component.html',
  styleUrl: './form-select.component.css',
})
export class FormSelectComponent {
  @Input() inputId!: string;
  @Input() title!: string;
  @Input() options!: OptionModel[];
}
