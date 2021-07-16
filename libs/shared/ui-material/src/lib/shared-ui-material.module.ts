import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StarRatingModule } from './star-rating/star-rating.module';
import { TopOfPageModule } from './top-of-page/top-of-page.module';
import { AccordionModule } from './accordion/accordion.module';
import { CardModule } from './card/card.module';

@NgModule({
  imports: [
    CommonModule,
    StarRatingModule,
    TopOfPageModule,
    AccordionModule,
    CardModule,
  ],
})
export class SharedUiMaterialModule {}
