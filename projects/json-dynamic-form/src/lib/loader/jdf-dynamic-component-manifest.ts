import { InjectionToken } from '@angular/core';

export const JDF_DYNAMIC_COMPONENT = new InjectionToken<any>('JDF_DYNAMIC_COMPONENT');
export const JDF_DYNAMIC_MODULE = new InjectionToken<any>('JDF_DYNAMIC_MODULE');
export const JDF_DYNAMIC_COMPONENT_MANIFESTS = new InjectionToken<any>('JDF_DYNAMIC_COMPONENT_MANIFESTS');

export interface JdfDynamicComponentManifest {

  /** Unique identifier, used in the application to retrieve a ComponentFactory. */
  componentId: string;

  /** Unique identifier, used internally by Angular. */
  path: string;

  /** Path to component module. */
  loadChildren: string;
}
