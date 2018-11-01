import { NgModule } from '@angular/core';
import { ModuleWithProviders } from '@angular/core';

import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AddWrapperDirective } from './directives/add-wrapper.directive';
import { DynamicFieldDirective } from './directives/dynamic-field.directive';

import { FormButtonComponent } from './components/form-button/form-button.component';
import { FormCheckboxComponent } from './components/form-checkbox/form-checkbox.component';
import { FormCheckboxesComponent } from './components/form-checkboxes/form-checkboxes.component';
import { FormColorComponent } from './components/form-color/form-color.component';
import { FormDateComponent } from './components/form-date/form-date.component';
import { FormEmailComponent } from './components/form-email/form-email.component';
import { FormInputComponent } from './components/form-input/form-input.component';
import { FormPasswordComponent } from './components/form-password/form-password.component';
import { FormRadiosComponent } from './components/form-radios/form-radios.component';
import { FormResetComponent } from './components/form-reset/form-reset.component';
import { FormSelectComponent } from './components/form-select/form-select.component';
import { FormSubmitComponent } from './components/form-submit/form-submit.component';

import { JsonDynamicFormComponent } from './json-dynamic-form.component';

import { JsonDynamicFormService } from './services/json-dynamic-form.service';
import { JsonDynamicFormConfigService } from './services/json-dynamic-form-config.service';
import { JsonDynamicFormConfig } from './models/json-dynamic-form-config';

@NgModule({
  imports: [
    BsDatepickerModule.forRoot(),
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  declarations: [
    AddWrapperDirective,
    DynamicFieldDirective,
    FormButtonComponent,
    FormCheckboxComponent,
    FormCheckboxesComponent,
    FormColorComponent,
    FormDateComponent,
    FormEmailComponent,
    FormInputComponent,
    FormPasswordComponent,
    FormRadiosComponent,
    FormResetComponent,
    FormSelectComponent,
    FormSubmitComponent,
    JsonDynamicFormComponent
  ],
  exports: [
    JsonDynamicFormComponent
  ],
  entryComponents: [
    FormButtonComponent,
    FormCheckboxComponent,
    FormCheckboxesComponent,
    FormColorComponent,
    FormDateComponent,
    FormEmailComponent,
    FormInputComponent,
    FormPasswordComponent,
    FormRadiosComponent,
    FormResetComponent,
    FormSelectComponent,
    FormSubmitComponent
  ]
})
export class JsonDynamicFormModule {

  static forRoot(params: JsonDynamicFormConfig): ModuleWithProviders {
    return {
      ngModule: JsonDynamicFormModule,
      providers: [
        JsonDynamicFormService,
        {
          provide: JsonDynamicFormConfigService,
          useValue: params
        }
      ]
    };
  }
}
