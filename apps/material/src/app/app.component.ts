import { Component, HostBinding } from '@angular/core';
import { ToolbarLink } from '@material-uiclone/shared/ui-material';
import { ThemeService } from '@material-uiclone/shared/util-services';

@Component({
  selector: 'mui-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  links: ToolbarLink[] = [
    { path: '', title: 'Components' },
    { path: 'directives', title: 'Directives' },
    { path: 'services', title: 'Services' },
    { path: 'pipes', title: 'Pipes' },
    { path: 'other', title: 'Other' },
  ];

  @HostBinding('class.dark')
  get themeMode() {
    return this.themeService.darkMode;
  }

  constructor(public themeService: ThemeService) {}
}
