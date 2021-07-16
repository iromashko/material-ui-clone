import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialDomainModule } from '@material-uiclone/material/domain';
import { DirectivesComponent } from './directives.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    MaterialDomainModule,
    RouterModule.forChild([{ path: '', component: DirectivesComponent }]),
  ],
  declarations: [DirectivesComponent],
  exports: [DirectivesComponent],
})
export class MaterialFeatureDirectivesModule {}
