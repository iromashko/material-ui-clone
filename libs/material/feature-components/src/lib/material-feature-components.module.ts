import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialDomainModule } from '@material-uiclone/material/domain';
import { ComponentsComponent } from './components.component';
import {
  StarRatingModule,
  TopOfPageModule,
  AccordionModule,
  CardModule,
  ProgressBarModule,
  ToolbarModule,
} from '@material-uiclone/shared/ui-material';

import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    MaterialDomainModule,
    RouterModule.forChild([{ path: '', component: ComponentsComponent }]),
    StarRatingModule,
    TopOfPageModule,
    AccordionModule,
    CardModule,
    ProgressBarModule,
    ToolbarModule,
    HttpClientModule,
  ],
  declarations: [ComponentsComponent],
  exports: [ComponentsComponent],
})
export class MaterialFeatureComponentsModule {}
