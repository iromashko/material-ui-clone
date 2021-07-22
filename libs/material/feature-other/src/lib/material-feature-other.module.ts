import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialDomainModule } from '@material-uiclone/material/domain';
import { OtherComponent } from './other.component';
import { RouterModule } from '@angular/router';
import { CardModule } from '@material-uiclone/shared/ui-material';
import { FormDirtyGuard } from '@material-uiclone/shared/util-services';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    MaterialDomainModule,
    RouterModule.forChild([
      { path: '', component: OtherComponent, canDeactivate: [FormDirtyGuard] },
    ]),
    CardModule,
    ReactiveFormsModule,
  ],
  declarations: [OtherComponent],
  exports: [OtherComponent],
})
export class MaterialFeatureOtherModule {}
