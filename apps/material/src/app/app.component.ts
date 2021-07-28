import { Component, Inject, OnInit, Renderer2 } from '@angular/core';
import {
  SocialMedia,
  SocialMediaIcon,
  ToolbarLink,
} from '@material-uiclone/shared/ui-material';
import {
  ThemeService,
  TitleService,
} from '@material-uiclone/shared/util-services';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'mui-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  darkMode$ = this.themeService.darkModeAction$.pipe(
    tap((value) => this.toggleDarkMode(value))
  );

  socialMedia: SocialMediaIcon[] = [
    {
      href: 'http://www.facebook.com',
      type: SocialMedia.Facebook,
    },
    {
      href: 'http://www.instagram.com',
      type: SocialMedia.Instagram,
    },
    {
      href: 'http://www.linkedin.com',
      type: SocialMedia.LinkedIn,
    },
    {
      href: 'http://www.twitter.com',
      type: SocialMedia.Twitter,
    },
    {
      href: 'http://www.youtube.com',
      type: SocialMedia.YouTube,
    },
  ];

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
    @Inject('Document') private document: Document,
    public titleService: TitleService
  ) {}

  ngOnInit(): void {
    this.titleService.initializeTitleService();
  }
}
