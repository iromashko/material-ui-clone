import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { SharedUiToolbarModule } from '@material-uiclone/shared/ui-toolbar';
import { SharedUiCardModule } from '@material-uiclone/shared/ui-card';
import { SharedUiAccordionModule } from '@material-uiclone/shared/ui-accordion';
import {
  SharedUiMaterialModule,
  StarRatingModule,
  TopOfPageModule,
} from '@material-uiclone/shared/ui-material';
import { SharedUiProgressBarModule } from '@material-uiclone/shared/ui-progress-bar';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot([], { initialNavigation: 'enabledBlocking' }),
    SharedUiToolbarModule,
    SharedUiCardModule,
    SharedUiAccordionModule,
    SharedUiProgressBarModule,
    SharedUiMaterialModule,
    StarRatingModule,
    TopOfPageModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
