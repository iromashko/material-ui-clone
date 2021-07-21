import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SortTableComponent } from './sort-table.component';
import { SimpleTableModule } from '../simple-table/simple-table.module';

@NgModule({
  declarations: [SortTableComponent],
  imports: [CommonModule, SimpleTableModule],
  exports: [SortTableComponent],
})
export class SortTableModule {}
