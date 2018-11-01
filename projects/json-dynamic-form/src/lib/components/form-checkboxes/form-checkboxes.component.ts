import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'jdf-form-checkboxes',
  templateUrl: './form-checkboxes.component.html',
  styleUrls: ['./form-checkboxes.component.css']
})
export class FormCheckboxesComponent {
  config;
  group: FormGroup;
}
