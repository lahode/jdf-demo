import { Component, ViewChild, AfterViewInit } from '@angular/core';

import { JsonDynamicFormComponent } from 'json-dynamic-form';

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.css']
})
export class SampleComponent implements AfterViewInit {

  @ViewChild(JsonDynamicFormComponent) form: JsonDynamicFormComponent;

  ngAfterViewInit() {
    let previousValid = this.form.valid;
    this.form.changes.subscribe(() => {
      if (this.form.valid !== previousValid) {
        previousValid = this.form.valid;
        this.form.setDisabled('submit', !previousValid);
      }
    });

    this.form.getForm().subscribe(form => form['controls']['name'].setValue('My food'));
    this.form.setDisabled('submit', true);
  }

  submit(value: {[name: string]: any}) {
  }

}
