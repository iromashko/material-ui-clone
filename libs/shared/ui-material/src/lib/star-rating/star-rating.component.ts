import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'material-star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StarRatingComponent {
  highestRating = 5;
  @Input() rating = 5;

  get fullStars(): number[] {
    const totalFullStars =
      this.rating % 1 >= 0.5 ? Math.floor(this.rating) : Math.ceil(this.rating);
    return Array(totalFullStars).fill(0);
  }

  get hasHalfStar(): boolean {
    const hasHalfStar =
      this.rating - Math.floor(this.rating) >= 0.5 &&
      this.rating !== this.highestRating;

    return hasHalfStar;
  }

  get emptyStars(): number[] {
    const totalEmptyStars = Math.floor(this.highestRating - this.rating);
    return Array(totalEmptyStars).fill(0);
  }
}
