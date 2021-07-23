import {
  Component,
  ChangeDetectionStrategy,
  Input,
  HostBinding,
  ViewChild,
} from '@angular/core';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Component({
  selector: 'material-snackbar',
  templateUrl: './snackbar.component.html',
  styleUrls: ['./snackbar.component.scss'],
})
export class SnackbarComponent {
  @Input() message = '';
  isShown = false;

  show(): void {
    this.isShown = true;

    const sub = of(null)
      .pipe(delay(2900))
      .subscribe(() => {
        this.isShown = false;
        sub.unsubscribe();
      });
  }
}
