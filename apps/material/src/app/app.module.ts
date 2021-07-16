import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { MaterialFeatureShowcaseModule } from '@material-uiclone/material/feature-showcase';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot([], { initialNavigation: 'enabledBlocking' }),
    MaterialFeatureShowcaseModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
