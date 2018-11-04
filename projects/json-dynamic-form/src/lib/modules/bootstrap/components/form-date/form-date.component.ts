import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'jdf-form-date',
  templateUrl: './form-date.component.html',
  styleUrls: ['./form-date.component.css']
})
export class FormDateComponent {
  config;
  group: FormGroup;
  dateInputFormat: string;
}
