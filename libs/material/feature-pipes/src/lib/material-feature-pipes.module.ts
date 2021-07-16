import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialDomainModule } from '@material-uiclone/material/domain';
import { PipesComponent } from './pipes.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    MaterialDomainModule,
    RouterModule.forChild([{ path: '', component: PipesComponent }]),
  ],
  declarations: [PipesComponent],
  exports: [PipesComponent],
})
export class MaterialFeaturePipesModule {}
