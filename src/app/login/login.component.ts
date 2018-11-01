import { Component, ViewChild, AfterViewInit } from '@angular/core';

import { JsonDynamicFormComponent } from 'json-dynamic-form';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements AfterViewInit {

  @ViewChild(JsonDynamicFormComponent) form: JsonDynamicFormComponent;

  ngAfterViewInit() {
    let previousValid = this.form.valid;
    this.form.changes.subscribe(() => {
      if (this.form.valid !== previousValid) {
        previousValid = this.form.valid;
        this.form.setDisabled('submit', !previousValid);
      }
    });

    this.form.setDisabled('submit', true);
  }

  submit(value: {[name: string]: any}) {
    console.log(value);
  }

}
