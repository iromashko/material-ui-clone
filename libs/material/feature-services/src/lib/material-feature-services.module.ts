import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialDomainModule } from '@material-uiclone/material/domain';
import { ServicesComponent } from './services.component';
import { RouterModule } from '@angular/router';
import {
  BannerModule,
  CardModule,
  SnackbarModule,
} from '@material-uiclone/shared/ui-material';
import { UserService } from '@material-uiclone/shared/util-services';

@NgModule({
  imports: [
    CommonModule,
    MaterialDomainModule,
    RouterModule.forChild([{ path: '', component: ServicesComponent }]),
    CardModule,
    SnackbarModule,
    BannerModule,
  ],
  declarations: [ServicesComponent],
  exports: [ServicesComponent],
  providers: [UserService],
})
export class MaterialFeatureServicesModule {}
