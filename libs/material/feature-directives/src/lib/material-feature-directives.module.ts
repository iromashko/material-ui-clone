import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialDomainModule } from '@material-uiclone/material/domain';
import { DirectivesComponent } from './directives.component';
import { RouterModule } from '@angular/router';
import { CardModule } from '@material-uiclone/shared/ui-material';
import {
  CopyDirective,
  DebounceClickDirective,
  RippleDirective,
  ScaleDirective,
} from '@material-uiclone/shared/ui-directives';

@NgModule({
  imports: [
    CommonModule,
    MaterialDomainModule,
    RouterModule.forChild([{ path: '', component: DirectivesComponent }]),
    CardModule,
  ],
  declarations: [
    DirectivesComponent,
    DebounceClickDirective,
    RippleDirective,
    ScaleDirective,
    CopyDirective,
  ],
  providers: [
    {
      provide: 'Navigator',
      useValue: navigator,
    },
    {
      provide: 'Document',
      useValue: document,
    },
  ],
  exports: [DirectivesComponent],
})
export class MaterialFeatureDirectivesModule {}
