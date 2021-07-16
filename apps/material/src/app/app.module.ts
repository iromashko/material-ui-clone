import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import {
  SharedUiMaterialModule,
  StarRatingModule,
  TopOfPageModule,
  AccordionModule,
  CardModule,
  ProgressBarModule,
  ToolbarModule,
} from '@material-uiclone/shared/ui-material';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot([], { initialNavigation: 'enabledBlocking' }),
    SharedUiMaterialModule,
    StarRatingModule,
    TopOfPageModule,
    AccordionModule,
    CardModule,
    ProgressBarModule,
    ToolbarModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
