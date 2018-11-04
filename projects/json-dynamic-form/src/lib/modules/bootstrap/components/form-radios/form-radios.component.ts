import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'jdf-form-radios',
  templateUrl: './form-radios.component.html',
  styleUrls: ['./form-radios.component.css']
})
export class FormRadiosComponent {
  config;
  group: FormGroup;

  getValue(option) {
    return typeof option === 'string' ? option : Object.keys(option)[0];
  }

  getDisplay(option) {
    return typeof option === 'string' ? option : option[Object.keys(option)[0]];
  }
}
