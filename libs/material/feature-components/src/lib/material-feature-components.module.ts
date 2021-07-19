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
  LoaderModule,
  CreditCardInputModule,
  TwitterPostModule,
  LinkedinPostModule,
  ModalModule,
  QuoteModule,
  ToggleModule,
  RichTextViewerModule,
  DebounceSearchModule,
} from '@material-uiclone/shared/ui-material';

import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    MaterialDomainModule,
    RouterModule.forChild([
      { path: '', component: ComponentsComponent },
      {
        path: 'directives',
        loadChildren: () =>
          import('@material-uiclone/material/feature-directives').then(
            (m) => m.MaterialFeatureDirectivesModule
          ),
      },
      {
        path: 'services',
        loadChildren: () =>
          import('@material-uiclone/material/feature-services').then(
            (m) => m.MaterialFeatureServicesModule
          ),
      },
      {
        path: 'pipes',
        loadChildren: () =>
          import('@material-uiclone/material/feature-pipes').then(
            (m) => m.MaterialFeaturePipesModule
          ),
      },
      {
        path: 'other',
        loadChildren: () =>
          import('@material-uiclone/material/feature-other').then(
            (m) => m.MaterialFeatureOtherModule
          ),
      },
    ]),
    StarRatingModule,
    TopOfPageModule,
    AccordionModule,
    CardModule,
    ProgressBarModule,
    ToolbarModule,
    HttpClientModule,
    LoaderModule,
    CreditCardInputModule,
    TwitterPostModule,
    LinkedinPostModule,
    ModalModule,
    QuoteModule,
    ToggleModule,
    RichTextViewerModule,
    DebounceSearchModule,
  ],
  declarations: [ComponentsComponent],
  exports: [ComponentsComponent],
})
export class MaterialFeatureComponentsModule {}
