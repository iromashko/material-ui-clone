import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'material-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BannerComponent {
  @Input() imageUrl = 'https://source.unsplash.com/featured?texture';
  @Input() title = 'Angular Challenge';
}
