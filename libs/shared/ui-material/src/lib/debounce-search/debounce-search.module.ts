import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DebounceSearchComponent } from './debounce-search.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [DebounceSearchComponent],
  imports: [CommonModule, FormsModule],
  exports: [DebounceSearchComponent],
})
export class DebounceSearchModule {}
