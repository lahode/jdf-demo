import { Directive, Input, TemplateRef, ViewContainerRef, ElementRef, AfterViewInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[jdfAddWrapper]'
})
export class AddWrapperDirective implements AfterViewInit {

  @Input()
  params: string;

  constructor(private _renderer: Renderer2, private _el: ElementRef) {}

  ngAfterViewInit() {
    // Create a div
    if (this.params && this.params['type']) {
      // Get parent of the original input element
      const parent = this._el.nativeElement.parentNode;

      // Create the wrapper
      const wrapperElement = this._renderer.createElement(this.params['type']);
      this._renderer.addClass(wrapperElement, this.params['class']);
      if (this.params['label']) {
        const labelElement = this._renderer.createElement('legend');
        const textLabelElement = this._renderer.createText(this.params['label']);
        this._renderer.appendChild(labelElement, textLabelElement);
        this._renderer.appendChild(wrapperElement, labelElement);
      }

      // Add the wrapper, just before the input
      this._renderer.insertBefore(parent, wrapperElement, this._el.nativeElement);

      // Remove the input
      this._renderer.removeChild(parent, this._el.nativeElement);

      // Remove the directive attribute (not really necessary, but just to be clean)
      this._renderer.removeAttribute(this._el.nativeElement, 'addWrapper');

      // Re-add it inside the wrapper
      this._renderer.appendChild(wrapperElement, this._el.nativeElement);
    }
  }

}
