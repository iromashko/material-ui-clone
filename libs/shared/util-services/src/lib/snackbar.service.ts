import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SnackbarService {
  snackbar$ = new Subject<string>();

  callSnackbar(message: string): void {
    this.snackbar$.next(message);
  }
}
