import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialDomainModule } from '@material-uiclone/material/domain';
import { ServicesComponent } from './services.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    MaterialDomainModule,
    RouterModule.forChild([{ path: '', component: ServicesComponent }]),
  ],
  declarations: [ServicesComponent],
  exports: [ServicesComponent],
})
export class MaterialFeatureServicesModule {}
