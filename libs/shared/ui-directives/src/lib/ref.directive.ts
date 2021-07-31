import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[directivesRef]',
})
export class RefDirective {
  constructor(public containerRef: ViewContainerRef) {}
}
