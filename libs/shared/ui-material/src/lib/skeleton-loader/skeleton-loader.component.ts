import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

interface SkeletonDimensions {
  width: string;
  height: string;
}

@Component({
  selector: 'material-skeleton-loader',
  templateUrl: './skeleton-loader.component.html',
  styleUrls: ['./skeleton-loader.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SkeletonLoaderComponent {
  @Input() width = '100%';
  @Input() height = '100%';

  get dimensions(): SkeletonDimensions {
    return { width: this.width, height: this.height };
  }
}
