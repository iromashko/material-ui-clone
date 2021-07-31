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
  SearchListModule,
  CounterModule,
  SimpleTableModule,
  PaginationModule,
  TabModule,
  SortTableModule,
  EmailFormModule,
  RibbonModule,
  ButtonGroupModule,
  BannerModule,
  SnackbarModule,
  SimplePopupModule,
  CountdownTimerModule,
  SkeletonLoaderModule,
  FieldsetModule,
  BottomSheetModule,
  PillModule,
  PillFilterModule,
  NotFoundModule,
  NotFoundComponent,
  PasswordModule,
  ModalDynamicModule,
} from '@material-uiclone/shared/ui-material';

import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { RefDirective } from '@material-uiclone/shared/ui-directives';

@NgModule({
  imports: [
    CommonModule,
    MaterialDomainModule,
    RouterModule.forChild([
      {
        path: '',
        data: { title: 'Components' },
        component: ComponentsComponent,
      },
      {
        path: 'directives',
        data: { title: 'Directives' },
        loadChildren: () =>
          import('@material-uiclone/material/feature-directives').then(
            (m) => m.MaterialFeatureDirectivesModule
          ),
      },
      {
        path: 'services',
        data: { title: 'Services' },
        loadChildren: () =>
          import('@material-uiclone/material/feature-services').then(
            (m) => m.MaterialFeatureServicesModule
          ),
      },
      {
        path: 'pipes',
        data: { title: 'Pipes' },
        loadChildren: () =>
          import('@material-uiclone/material/feature-pipes').then(
            (m) => m.MaterialFeaturePipesModule
          ),
      },
      {
        path: 'other',
        data: { title: 'Other' },
        loadChildren: () =>
          import('@material-uiclone/material/feature-other').then(
            (m) => m.MaterialFeatureOtherModule
          ),
      },
      {
        path: '**',
        component: NotFoundComponent,
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
    SearchListModule,
    CounterModule,
    SimpleTableModule,
    PaginationModule,
    TabModule,
    SortTableModule,
    EmailFormModule,
    RibbonModule,
    ButtonGroupModule,
    BannerModule,
    SnackbarModule,
    SimplePopupModule,
    CountdownTimerModule,
    SkeletonLoaderModule,
    BottomSheetModule,
    FieldsetModule,
    PillModule,
    PillFilterModule,
    NotFoundModule,
    PasswordModule,
    ModalDynamicModule,
  ],
  declarations: [ComponentsComponent, RefDirective],
  exports: [ComponentsComponent],
})
export class MaterialFeatureComponentsModule {}
