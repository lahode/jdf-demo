import { Component, Input, Output, EventEmitter, OnInit, OnDestroy, ViewChild, ViewContainerRef } from '@angular/core';
import { Subscription } from 'rxjs';

import { JdfDynamicComponentLoader } from './loader/jdf-dynamic-component-loader.service';

@Component({
  exportAs: 'jdfDynamicForm',
  selector: 'jdf-dynamic-form',
  template: '<ng-container #jdfOutlet></ng-container>',
  styles: []
})
export class JsonDynamicFormComponent implements OnInit, OnDestroy {
  @ViewChild('jdfOutlet', { read: ViewContainerRef }) jdfOutlet: ViewContainerRef;
  @Input() formName;
  @Input() use;
  @Output() submit: EventEmitter<any> = new EventEmitter<any>();

  private componentSubscribe: Subscription;
  private outputSubscribe: Subscription;
  private componentRef: any;

  constructor(private dynamicComponentLoader: JdfDynamicComponentLoader) {}

  ngOnInit() {
    this.use = this.use || 'bootstrap';
    this.componentSubscribe = this.dynamicComponentLoader
      .getComponentFactory<any>(`jdf-${this.use}`)
      .subscribe(componentFactory => {
        this.componentRef = this.jdfOutlet.createComponent(componentFactory);
        this.componentRef.instance.formName = this.formName;
        this.outputSubscribe = this.componentRef.instance.submit.subscribe(data => {
          this.submit.emit(data);
        });
        this.componentRef.changeDetectorRef.detectChanges();
      }, error => {
        console.warn(error);
      });
  }

  ngOnDestroy() {
    this.componentSubscribe.unsubscribe();
    this.outputSubscribe.unsubscribe();
    if (this.componentRef) {
      this.componentRef.destroy();
    }
  }

}
