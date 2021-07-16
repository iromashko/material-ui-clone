import { ViewportScroller } from '@angular/common';
import {
  Component,
  ChangeDetectionStrategy,
  HostListener,
} from '@angular/core';

@Component({
  selector: 'material-top-of-page',
  templateUrl: './top-of-page.component.html',
  styleUrls: ['./top-of-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TopOfPageComponent {
  isShown = false;

  constructor(private viewportScroller: ViewportScroller) {}

  @HostListener('window:scroll')
  onWindowScroll(): void {
    const yCoordinate = this.viewportScroller.getScrollPosition()[1];
    this.isShown = yCoordinate > 300;
  }

  goToTop(): void {
    this.viewportScroller.scrollToPosition([0, 0]);
  }
}
