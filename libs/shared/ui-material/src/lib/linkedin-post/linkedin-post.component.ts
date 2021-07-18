import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'material-linkedin-post',
  templateUrl: './linkedin-post.component.html',
  styleUrls: ['./linkedin-post.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LinkedinPostComponent {
  constructor(public router: Router) {}

  get linkedinMessage(): string {
    const base = 'https://www.linkedin.com/shareArticle?mini=true';
    const currentSite = `&url=https://www.google.com${this.router.url}`;

    return `${base}${currentSite}`;
  }
}
