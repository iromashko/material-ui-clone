import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StarRatingModule } from './star-rating/star-rating.module';
import { TopOfPageModule } from './top-of-page/top-of-page.module';

@NgModule({
  imports: [CommonModule, StarRatingModule, TopOfPageModule],
})
export class SharedUiMaterialModule {}
