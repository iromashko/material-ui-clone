import { Component, Inject, Renderer2 } from '@angular/core';
import { ToolbarLink } from '@material-uiclone/shared/ui-material';
import { ThemeService } from '@material-uiclone/shared/util-services';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'mui-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  darkMode$ = this.themeService.darkModeAction$.pipe(
    tap((value) => this.toggleDarkMode(value))
  );

  links: ToolbarLink[] = [
    { path: '', title: 'Components' },
    { path: 'directives', title: 'Directives' },
    { path: 'services', title: 'Services' },
    { path: 'pipes', title: 'Pipes' },
    { path: 'other', title: 'Other' },
  ];

  private toggleDarkMode(value: boolean): void {
    if (value) {
      this.renderer.addClass(this.document.body, 'dark');
    } else {
      this.renderer.removeClass(this.document.body, 'dark');
    }
  }

  constructor(
    public themeService: ThemeService,
    private renderer: Renderer2,
    @Inject('Document') private document: Document
  ) {}
}
