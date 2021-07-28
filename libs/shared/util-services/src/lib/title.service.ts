import { Injectable } from '@angular/core';
import {
  ActivatedRoute,
  NavigationEnd,
  Router,
  RouterEvent,
  Event,
  Data,
} from '@angular/router';
import { Title } from '@angular/platform-browser';
import { filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class TitleService {
  constructor(
    private titleService: Title,
    public router: Router,
    public route: ActivatedRoute
  ) {}

  initializeTitleService(): void {
    this.router.events
      .pipe(
        filter(
          (event: Event): event is RouterEvent => event instanceof NavigationEnd
        )
      )
      .subscribe(() => {
        const { data } = this.route.root.firstChild?.snapshot as Data;
        const mainTitle = 'Angular Challenge';
        const lastTitle = this.titleService.getTitle();

        if (data?.title) {
          if (lastTitle !== data.title) {
            this.titleService.setTitle(data.title);
          }
        } else {
          if (lastTitle !== mainTitle) {
            this.titleService.setTitle(mainTitle);
          }
        }
      });
  }
}
