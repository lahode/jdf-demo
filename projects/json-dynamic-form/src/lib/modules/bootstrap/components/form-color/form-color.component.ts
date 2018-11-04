import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'jdf-form-color',
  templateUrl: './form-color.component.html',
  styleUrls: ['./form-color.component.css']
})
export class FormColorComponent {
  config;
  group: FormGroup;
}
