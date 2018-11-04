import { ComponentFactory, Inject, Injectable, Injector, NgModuleFactory, NgModuleFactoryLoader } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { fromPromise } from 'rxjs/internal/observable/fromPromise';

import {
  JDF_DYNAMIC_COMPONENT,
  JDF_DYNAMIC_COMPONENT_MANIFESTS,
  JDF_DYNAMIC_MODULE,
  JdfDynamicComponentManifest,
} from './jdf-dynamic-component-manifest';

@Injectable()
export class JdfDynamicComponentLoader {

  constructor(
    @Inject(JDF_DYNAMIC_COMPONENT_MANIFESTS) private manifests: JdfDynamicComponentManifest[],
    private loader: NgModuleFactoryLoader,
    private injector: Injector,
  ) {
  }

  /** Retrieve a ComponentFactory, based on the specified componentId (defined in the JsonDynamicFormManifest array). */
  getComponentFactory<T>(componentId: string, injector?: Injector): Observable<ComponentFactory<T>> {
    const manifest = this.manifests
      .find(m => m.componentId === componentId);
    if (!manifest) {
      return throwError(`JdfDynamicComponentLoader: Unknown componentId "${componentId}"`);
    }

    const path = manifest.loadChildren;

    const p = this.load<T>(path, componentId, injector);
    return fromPromise(p);
  }

  load<T>(path: string, componentId: string, injector?: Injector): Promise<ComponentFactory<T>> {
    return this.loader.load(path)
      .then((ngModuleFactory) => this.loadFactory<T>(ngModuleFactory, componentId, injector));
  }

  loadFactory<T>(ngModuleFactory: NgModuleFactory<any>, componentId: string, injector?: Injector): Promise<ComponentFactory<T>> {
    const moduleRef = ngModuleFactory.create(injector || this.injector);
    const dynamicComponentType = moduleRef.injector.get(JDF_DYNAMIC_COMPONENT, null);
    if (!dynamicComponentType) {
      const dynamicModule: JdfDynamicComponentManifest = moduleRef.injector.get(JDF_DYNAMIC_MODULE, null);

      if (!dynamicModule) {
        throw new Error(
          'JdfDynamicComponentLoader: Dynamic module for'
          + ` componentId "${componentId}" does not contain`
          + ' JDF_DYNAMIC_COMPONENT or JDF_DYNAMIC_MODULE as a provider.',
        );
      }
      if (dynamicModule.componentId !== componentId) {
        throw new Error(
          'JdfDynamicComponentLoader: Dynamic module for'
          + `${componentId} does not match manifest.`,
        );
      }

      const path = dynamicModule.loadChildren;

      if (!path) {
        throw new Error(`${componentId} unknown!`);
      }

      return this.load<T>(path, componentId, injector);
    }

    return Promise.resolve(moduleRef.componentFactoryResolver.resolveComponentFactory<T>(dynamicComponentType));
  }
}
