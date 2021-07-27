import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PillFilterComponent } from './pill-filter.component';
import { PillModule } from '../pill/pill.module';

@NgModule({
  declarations: [PillFilterComponent],
  imports: [CommonModule, PillModule],
  exports: [PillFilterComponent],
})
export class PillFilterModule {}
