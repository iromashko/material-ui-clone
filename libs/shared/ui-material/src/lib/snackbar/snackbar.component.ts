import {
  Component,
  Input,
  OnDestroy,
  OnInit,
  ViewEncapsulation,
} from '@angular/core';
import { of, Subscription } from 'rxjs';
import { delay } from 'rxjs/operators';
import { SnackbarService } from '@material-uiclone/shared/util-services';

@Component({
  selector: 'material-snackbar',
  templateUrl: './snackbar.component.html',
  styleUrls: ['./snackbar.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class SnackbarComponent implements OnInit, OnDestroy {
  @Input() message = '';
  isShown = false;

  sub: Subscription | undefined;

  showMessage(message: string): void {
    this.isShown = true;
    this.message = message;

    const sub = of(null)
      .pipe(delay(2900))
      .subscribe(() => {
        this.isShown = false;
        sub.unsubscribe();
      });
  }

  ngOnInit(): void {
    this.sub = this.snackbarService.snackbar$.subscribe((value) => {
      this.message = value;
      this.showMessage(value);
    });
  }

  ngOnDestroy(): void {
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }

  constructor(private snackbarService: SnackbarService) {}
}
