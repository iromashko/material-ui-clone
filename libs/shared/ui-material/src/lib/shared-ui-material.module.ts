import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StarRatingModule } from './star-rating/star-rating.module';

@NgModule({
  imports: [CommonModule, StarRatingModule],
})
export class SharedUiMaterialModule {}
