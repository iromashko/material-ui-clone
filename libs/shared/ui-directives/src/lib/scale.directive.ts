import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[directivesScale]',
})
export class ScaleDirective {
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('mouseover')
  scaleUp(): void {
    this.renderer.setStyle(this.el.nativeElement, 'transition', 'all .3s');
    this.renderer.setStyle(this.el.nativeElement, 'transform', 'scale(1.25)');
  }

  @HostListener('mouseleave')
  scaleDown(): void {
    this.renderer.setStyle(this.el.nativeElement, 'transform', 'scale(1)');
  }
}
