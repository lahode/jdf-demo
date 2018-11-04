import { NgModule } from '@angular/core';

import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

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
import { FormTextareaComponent } from './components/form-textarea/form-textarea.component';

import { JdfMaterialComponent } from './jdf-material.component';

import { JdfDynamicComponentLoaderModule } from '../../loader/jdf-dynamic-component-loader.module';

@NgModule({
  imports: [
    BsDatepickerModule.forRoot(),
    CommonModule,
    ReactiveFormsModule,
    JdfDynamicComponentLoaderModule.forChild(JdfMaterialComponent)
  ],
  declarations: [
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
    FormTextareaComponent,
    JdfMaterialComponent
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
export class JdfMaterialModule {}
