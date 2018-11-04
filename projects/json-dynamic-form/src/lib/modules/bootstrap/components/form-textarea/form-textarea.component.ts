import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'jdf-form-textarea',
  templateUrl: './form-textarea.component.html',
  styleUrls: ['./form-textarea.component.css']
})
export class FormTextareaComponent {
  config;
  group: FormGroup;
}
