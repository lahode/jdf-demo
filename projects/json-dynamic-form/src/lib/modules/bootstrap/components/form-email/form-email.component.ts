import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'jdf-form-email',
  templateUrl: './form-email.component.html',
  styleUrls: ['./form-email.component.css']
})
export class FormEmailComponent {
  config;
  group: FormGroup;
}
