import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import {
  TopOfPageModule,
  ToolbarModule,
  ToggleModule,
  SnackbarModule,
  FooterModule,
} from '@material-uiclone/shared/ui-material';
import { MaterialFeatureComponentsModule } from '@material-uiclone/material/feature-components';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([], { initialNavigation: 'enabledBlocking' }),
    TopOfPageModule,
    ToolbarModule,
    MaterialFeatureComponentsModule,
    HttpClientModule,
    ToggleModule,
    SnackbarModule,
    FooterModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
