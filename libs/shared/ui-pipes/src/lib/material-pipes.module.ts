import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreditCardFormatterPipe } from './credit-card-formatter.pipe';
import { FilterTermPipe } from './filter-term.pipe';
import { FlattenPipe } from './flatten.pipe';
import { TruncatePipe } from './truncate.pipe';

@NgModule({
  declarations: [
    CreditCardFormatterPipe,
    FilterTermPipe,
    FlattenPipe,
    TruncatePipe,
  ],
  imports: [CommonModule],
  exports: [CreditCardFormatterPipe, FilterTermPipe, FlattenPipe, TruncatePipe],
})
export class MaterialPipesModule {}
