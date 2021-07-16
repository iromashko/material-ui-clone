import { Component } from '@angular/core';
import { ToolbarLink } from '@material-uiclone/shared/ui-material';

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
}
