import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import {
  TopOfPageModule,
  ToolbarModule,
} from '@material-uiclone/shared/ui-material';
import { MaterialFeatureComponentsModule } from '@material-uiclone/material/feature-components';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot([], { initialNavigation: 'enabledBlocking' }),
    TopOfPageModule,
    ToolbarModule,
    MaterialFeatureComponentsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
