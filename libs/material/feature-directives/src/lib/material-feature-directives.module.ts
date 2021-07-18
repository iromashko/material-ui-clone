import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialDomainModule } from '@material-uiclone/material/domain';
import { DirectivesComponent } from './directives.component';
import { RouterModule } from '@angular/router';
import { CardModule } from '@material-uiclone/shared/ui-material';
import { DebounceClickDirective } from '@material-uiclone/shared/ui-directives';

@NgModule({
  imports: [
    CommonModule,
    MaterialDomainModule,
    RouterModule.forChild([{ path: '', component: DirectivesComponent }]),
    CardModule,
  ],
  declarations: [DirectivesComponent, DebounceClickDirective],
  exports: [DirectivesComponent],
})
export class MaterialFeatureDirectivesModule {}
