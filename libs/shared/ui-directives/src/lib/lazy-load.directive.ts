import {
  Directive,
  HostBinding,
  Input,
  ElementRef,
  AfterViewInit,
  Inject,
  OnDestroy,
} from '@angular/core';

@Directive({
  selector: 'img[directivesLazyLoad]',
})
export class LazyLoadDirective implements AfterViewInit, OnDestroy {
  @HostBinding('attr.src') srcAttribute: string | null = null;
  @Input() src = '';

  observer: IntersectionObserver | undefined;

  constructor(
    private el: ElementRef,
    @Inject('Window') public window: Window
  ) {}

  ngAfterViewInit(): void {
    if (this.canLazyLoad()) {
      this.observer = new IntersectionObserver((entries) => {
        entries.forEach(({ isIntersecting }) => {
          if (isIntersecting) {
            this.loadImage();
            this.observer?.unobserve(this.el.nativeElement);
          }
        });
      });
      this.observer.observe(this.el.nativeElement);
    } else {
      this.loadImage();
    }
  }

  private loadImage(): void {
    this.srcAttribute = this.src;
  }

  canLazyLoad(): boolean {
    return (
      this.window &&
      Object.prototype.hasOwnProperty.call(this.window, 'IntersectionObserver')
    );
  }

  ngOnDestroy(): void {
    if (this.observer) {
      this.observer.disconnect();
    }
  }
}
