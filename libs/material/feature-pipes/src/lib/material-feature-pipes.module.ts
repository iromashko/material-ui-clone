import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialDomainModule } from '@material-uiclone/material/domain';
import { PipesComponent } from './pipes.component';
import { RouterModule } from '@angular/router';
import { BannerModule, CardModule } from '@material-uiclone/shared/ui-material';
import { MaterialPipesModule } from '@material-uiclone/shared/ui-pipes';

@NgModule({
  imports: [
    CommonModule,
    MaterialDomainModule,
    RouterModule.forChild([{ path: '', component: PipesComponent }]),
    CardModule,
    MaterialPipesModule,
    BannerModule,
  ],
  declarations: [PipesComponent],
  exports: [PipesComponent],
})
export class MaterialFeaturePipesModule {}
