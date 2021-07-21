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

  constructor(private el: ElementRef, private rd: Renderer2) {}

  @HostListener('mouseenter')
  onHover() {
    this.rd.addClass(this.el.nativeElement, this.directivesRipple);
  }
}
