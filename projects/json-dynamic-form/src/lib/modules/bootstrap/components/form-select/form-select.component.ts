import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'jdf-form-select',
  templateUrl: './form-select.component.html',
  styleUrls: ['./form-select.component.css']
})
export class FormSelectComponent {
  config;
  group: FormGroup;

  getValue(option) {
    return typeof option === 'string' ? option : Object.keys(option)[0];
  }

  getDisplay(option) {
    return typeof option === 'string' ? option : option[Object.keys(option)[0]];
  }
}
