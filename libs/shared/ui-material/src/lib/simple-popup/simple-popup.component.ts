import { Component, Input } from '@angular/core';
import { fadeInOutAnimation } from '@material-uiclone/shared/ui-animations';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Component({
  selector: 'material-simple-popup',
  templateUrl: './simple-popup.component.html',
  styleUrls: ['./simple-popup.component.scss'],
  animations: [fadeInOutAnimation],
})
export class SimplePopupComponent {
  @Input() message = '';

  isShown = false;

  show(): void {
    this.isShown = true;

    const sub = of(null)
      .pipe(delay(2000))
      .subscribe(() => {
        this.isShown = false;
        sub.unsubscribe();
      });
  }
}
