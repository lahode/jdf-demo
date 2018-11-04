import { NgModule } from '@angular/core';
import { ModuleWithProviders } from '@angular/core';

import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { AddWrapperDirective } from './directives/add-wrapper.directive';
import { JsonDynamicFormComponent } from './json-dynamic-form.component';

import { JsonDynamicFormService } from './services/json-dynamic-form.service';
import { JsonDynamicFormConfigService } from './services/json-dynamic-form-config.service';
import { JsonDynamicFormConfig } from './models/json-dynamic-form-config';

import {
  JdfDynamicComponentLoaderModule,
  JdfDynamicComponentManifest,
} from './loader/jdf-dynamic-component-loader.module';

// This array defines which "componentId" maps to which lazy-loaded module.
const manifests: JdfDynamicComponentManifest[] = [
  {
    componentId: 'jdf-bootstrap',
    path: 'jdf-bootstrap',
    loadChildren: './modules/bootstrap/jdf-bootstrap.module#JdfBootstrapModule',
  },
  {
    componentId: 'jdf-material',
    path: 'jdf-material',
    loadChildren: './modules/material/jdf-material.module#JdfMaterialModule',
  },
];

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    JdfDynamicComponentLoaderModule.forRoot(manifests),
  ],
  declarations: [
    AddWrapperDirective,
    JsonDynamicFormComponent
  ],
  exports: [
    JsonDynamicFormComponent
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
