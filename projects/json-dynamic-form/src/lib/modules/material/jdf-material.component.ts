import { Component, EventEmitter, OnChanges, OnInit, OnDestroy, Input, Output } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Subscription, AsyncSubject, of } from 'rxjs';

import { FieldConfig } from '../../models/field-config.interface';
import { JsonDynamicFormService } from '../../services/json-dynamic-form.service';

@Component({
  selector: 'jdf-dynamic-form-material',
  template: `
    ddd
    <form
      *ngIf="config"
      class="dynamic-form"
      [formGroup]="form"
      [id]="formName"
      (submit)="handleSubmit($event)">
      <div *ngFor="let dis of display | keyvalue"
           jdfAddWrapper
           [ngClass]="dis.value.class">
        <ng-container *ngFor="let field of config;">
          <ng-container
            *ngIf="dis.value.fields.indexOf(field.name) > -1"
            jdfDynamicField
            [config]="field"
            [group]="form">
          </ng-container>
        </ng-container>
      </div>
    </form>
  `,
  styles: []
})
export class JdfMaterialComponent implements OnChanges, OnInit, OnDestroy {

  @Input() formName;
  @Output() submit: EventEmitter<any> = new EventEmitter<any>();

  private formSubscribe: Subscription;
  private _initWaiter$ = new AsyncSubject();
  config: FieldConfig[];
  display: any[];
  form: FormGroup;

  get controls() { return this.config.filter(({type}) => type !== 'button'); }
  get changes() { return this.form ? this.form.valueChanges : of(null); }
  get valid() { return this.form ? this.form.valid : false; }
  get value() { return this.form ? this.form.value : ''; }

  constructor(private _df: JsonDynamicFormService,
              private _fb: FormBuilder) {}

  ngOnInit() {
    this.formSubscribe = this._df.getForm(this.formName).subscribe(config => {
      this.config = config['form'];
      this.display = config['display'] || null;
      this.form = this.createGroup();
      this._initWaiter$.next(this.form);
      this._initWaiter$.complete();
    });
  }

  getForm() {
    return this._initWaiter$;
  }

  ngOnChanges() {
    if (this.form) {
      const controls = Object.keys(this.form.controls);
      const configControls = this.controls.map((item) => item.name);

      controls
        .filter((control) => !configControls.includes(control))
        .forEach((control) => this.form.removeControl(control));

      configControls
        .filter((control) => !controls.includes(control))
        .forEach((name) => {
          const config = this.config.find((control) => control.name === name);
          this.form.addControl(name, this.createControl(config));
        });
    }
  }

  createGroup() {
    const group = this._fb.group({});
    this.controls.forEach(control => {
      if (control.type === 'checkboxes') {
        return group.addControl(control.name, this.createCheckboxesControl(control));
      }
      return group.addControl(control.name, this.createControl(control));
    });
    return group;
  }

  createCheckboxesControl(config: FieldConfig) {
    const subgroup = this._fb.group({});
    const { disabled, validation, value } = config;
    let key: string;
    config.options.forEach((option: any) => {
      key = typeof option === 'string' ? option : Object.keys(option)[0];
      subgroup.addControl(key, this._fb.control({ disabled, value }, validation));
    });
    return subgroup;
  }

  createControl(config: FieldConfig) {
    const { disabled, validation, value } = config;
    return this._fb.control({ disabled, value }, validation);
  }

  handleSubmit(event: Event) {
    event.preventDefault();
    event.stopPropagation();
    this.submit.emit(this.value);
  }

  setDisabled(name: string, disable: boolean) {
    if (this.form) {
      if (this.form.controls[name]) {
        const method = disable ? 'disable' : 'enable';
        this.form.controls[name][method]();
        return;
      }

      this.config = this.config.map((item) => {
        if (item.name === name) {
          item.disabled = disable;
        }
        return item;
      });
    }
  }

  setValue(name: string, value: any) {
    if (this.form) {
      this.form.controls[name].setValue(value, {emitEvent: true});
    }
  }

  ngOnDestroy() {
    this.formSubscribe.unsubscribe();
  }

}
