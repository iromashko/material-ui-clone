import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'material-twitter-post',
  templateUrl: './twitter-post.component.html',
  styleUrls: ['./twitter-post.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TwitterPostComponent {
  @Input() baseHref = 'https://google.com';
  @Input() hashTags = ['Angular', 'Nest.js', 'Typescript', 'Kubernetes'];

  constructor(private titleService: Title) {}

  get twitterUrl(): string {
    const base = this.getBaseWithHashTagsAndRoute();
    const message = encodeURIComponent(
      `Check out ${this.titleService.getTitle()} and become a CODING GOD!!!`
    );

    return `${base}${message}`;
  }

  private getBaseWithHashTagsAndRoute(): string {
    const route = encodeURI(this.baseHref);
    const hashTags = this.hashTags.join(',');

    return `https://twitter.com/intent/tweet?hashtags=${encodeURIComponent(
      hashTags
    )}&url=${route}&text=`;
  }
}
