import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { SocialMedia } from './social-media-enum';
import { SocialMediaIcon } from './social-media-icon.interface';

@Component({
  selector: 'material-social-media-bar',
  templateUrl: './social-media-bar.component.html',
  styleUrls: ['./social-media-bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SocialMediaBarComponent {
  @Input() socialMedia: SocialMediaIcon[] = [];
  SocialMedia = SocialMedia;
}
