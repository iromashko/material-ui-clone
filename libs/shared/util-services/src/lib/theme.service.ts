import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private darkModeSubject = new BehaviorSubject<boolean>(false);
  darkModeAction$ = this.darkModeSubject.asObservable();

  toggleDarkMode(): void {
    this.darkModeSubject.next(!this.darkModeSubject.getValue());
  }
}
