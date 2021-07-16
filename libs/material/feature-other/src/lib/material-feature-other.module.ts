import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialDomainModule } from '@material-uiclone/material/domain';
import { OtherComponent } from './other.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    MaterialDomainModule,
    RouterModule.forChild([{ path: '', component: OtherComponent }]),
  ],
  declarations: [OtherComponent],
  exports: [OtherComponent],
})
export class MaterialFeatureOtherModule {}
