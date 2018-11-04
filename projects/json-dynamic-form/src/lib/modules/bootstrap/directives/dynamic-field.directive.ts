import { ComponentFactoryResolver, ComponentRef, Directive, Input, OnChanges, OnInit, Type, ViewContainerRef } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { FormButtonComponent } from '../components/form-button/form-button.component';
import { FormCheckboxComponent } from '../components/form-checkbox/form-checkbox.component';
import { FormCheckboxesComponent } from '../components/form-checkboxes/form-checkboxes.component';
import { FormColorComponent } from '../components/form-color/form-color.component';
import { FormDateComponent } from '../components/form-date/form-date.component';
import { FormEmailComponent } from '../components/form-email/form-email.component';
import { FormInputComponent } from '../components/form-input/form-input.component';
import { FormPasswordComponent } from '../components/form-password/form-password.component';
import { FormRadiosComponent } from '../components/form-radios/form-radios.component';
import { FormResetComponent } from '../components/form-reset/form-reset.component';
import { FormSelectComponent } from '../components/form-select/form-select.component';
import { FormSubmitComponent } from '../components/form-submit/form-submit.component';
import { FormTextareaComponent } from '../components/form-textarea/form-textarea.component';

import { Field } from '../../../models/field.interface';
import { FieldConfig } from '../../../models/field-config.interface';

const components: {[type: string]: Type<Field>} = {
  button: FormButtonComponent,
  checkbox: FormCheckboxComponent,
  checkboxes: FormCheckboxesComponent,
  color: FormColorComponent,
  date: FormDateComponent,
  email: FormEmailComponent,
  input: FormInputComponent,
  password: FormPasswordComponent,
  radios: FormRadiosComponent,
  reset: FormResetComponent,
  select: FormSelectComponent,
  submit: FormSubmitComponent,
  textarea: FormTextareaComponent
};

@Directive({
  selector: '[jdfDynamicField]'
})
export class DynamicFieldDirective implements Field, OnChanges, OnInit {
  @Input()
  config: FieldConfig;

  @Input()
  group: FormGroup;

  component: ComponentRef<Field>;

  constructor(
    private resolver: ComponentFactoryResolver,
    private container: ViewContainerRef
  ) {}

  ngOnChanges() {
    if (this.component) {
      this.component.instance.config = this.config;
      this.component.instance.group = this.group;
    }
  }

  ngOnInit() {
    if (!components[this.config.type]) {
      const supportedTypes = Object.keys(components).join(', ');
      throw new Error(
        `Trying to use an unsupported type (${this.config.type}).
        Supported types: ${supportedTypes}`
      );
    }
    const component = this.resolver.resolveComponentFactory<Field>(components[this.config.type]);
    this.component = this.container.createComponent(component);
    this.component.instance.config = this.config;
    this.component.instance.group = this.group;
  }
}
