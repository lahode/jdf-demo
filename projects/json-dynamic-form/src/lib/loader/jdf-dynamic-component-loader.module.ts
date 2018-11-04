import {
    ANALYZE_FOR_ENTRY_COMPONENTS,
    ModuleWithProviders,
    NgModule,
    NgModuleFactoryLoader,
    SystemJsNgModuleLoader,
    Type,
} from '@angular/core';
import { ROUTES } from '@angular/router';

import { JdfDynamicComponentLoader } from './jdf-dynamic-component-loader.service';
import {
  JDF_DYNAMIC_COMPONENT,
  JDF_DYNAMIC_COMPONENT_MANIFESTS,
  JDF_DYNAMIC_MODULE,
  JdfDynamicComponentManifest,
} from './jdf-dynamic-component-manifest';

@NgModule()
export class JdfDynamicComponentLoaderModule {
  static forRoot(manifests: JdfDynamicComponentManifest[]): ModuleWithProviders {
    return {
      ngModule: JdfDynamicComponentLoaderModule,
      providers: [
        JdfDynamicComponentLoader,
        { provide: NgModuleFactoryLoader, useClass: SystemJsNgModuleLoader },
        // provider for Angular CLI to analyze
        { provide: ROUTES, useValue: manifests, multi: true },
        // provider for DynamicComponentLoader to analyze
        { provide: JDF_DYNAMIC_COMPONENT_MANIFESTS, useValue: manifests },
      ],
    };
  }
  static forModule(manifest: JdfDynamicComponentManifest): ModuleWithProviders {
    return {
      ngModule: JdfDynamicComponentLoaderModule,
      providers: [
        { provide: ANALYZE_FOR_ENTRY_COMPONENTS, useValue: manifest, multi: true },
        // provider for @angular/router to parse
        { provide: ROUTES, useValue: manifest, multi: true },
        // provider for DynamicComponentLoader to analyze
        { provide: JDF_DYNAMIC_MODULE, useValue: manifest }],
    };
  }
  static forChild(component: Type<any>): ModuleWithProviders {
    return {
      ngModule: JdfDynamicComponentLoaderModule,
      providers: [
        { provide: ANALYZE_FOR_ENTRY_COMPONENTS, useValue: component, multi: true },
        // provider for @angular/router to parse
        { provide: ROUTES, useValue: [], multi: true },
        // provider for DynamicComponentLoader to analyze
        { provide: JDF_DYNAMIC_COMPONENT, useValue: component },
      ],
    };
  }
}

export { JdfDynamicComponentManifest } from './jdf-dynamic-component-manifest';
