import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialDomainModule } from '@material-uiclone/material/domain';
import { ShowcaseComponent } from './showcase.component';
import { RouterModule } from '@angular/router';
import {
  StarRatingModule,
  TopOfPageModule,
  AccordionModule,
  CardModule,
  ProgressBarModule,
  ToolbarModule,
} from '@material-uiclone/shared/ui-material';

import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    MaterialDomainModule,
    RouterModule.forChild([{ path: '', component: ShowcaseComponent }]),
    StarRatingModule,
    TopOfPageModule,
    AccordionModule,
    CardModule,
    ProgressBarModule,
    ToolbarModule,
    HttpClientModule,
  ],
  declarations: [ShowcaseComponent],
  exports: [ShowcaseComponent],
})
export class MaterialFeatureShowcaseModule {}
