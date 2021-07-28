import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreditCardFormatterPipe } from './credit-card-formatter.pipe';
import { FilterTermPipe } from './filter-term.pipe';
import { FlattenPipe } from './flatten.pipe';
import { TruncatePipe } from './truncate.pipe';
import { RichTextPipe } from './rich-text.pipe';

@NgModule({
  declarations: [
    CreditCardFormatterPipe,
    FilterTermPipe,
    FlattenPipe,
    TruncatePipe,
    RichTextPipe,
  ],
  imports: [CommonModule],
  exports: [
    CreditCardFormatterPipe,
    FilterTermPipe,
    FlattenPipe,
    TruncatePipe,
    RichTextPipe,
  ],
})
export class MaterialPipesModule {}
