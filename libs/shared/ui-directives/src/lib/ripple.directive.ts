import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[directivesRipple]',
})
export class RippleDirective {
  @Input() directivesRipple = 'ripple';

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('mouseenter')
  onHover() {
    this.renderer.addClass(this.el.nativeElement, this.directivesRipple);
  }
}
