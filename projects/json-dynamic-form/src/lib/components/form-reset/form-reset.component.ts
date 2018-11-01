import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'jdf-form-reset',
  templateUrl: './form-reset.component.html',
  styleUrls: ['./form-reset.component.css']
})
export class FormResetComponent {
  config;
  group: FormGroup;
}
