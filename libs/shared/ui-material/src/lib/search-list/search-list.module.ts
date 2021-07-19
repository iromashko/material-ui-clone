import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchListComponent } from './search-list.component';
import { DebounceSearchModule } from '../debounce-search/debounce-search.module';
import { MaterialPipesModule } from '@material-uiclone/shared/ui-pipes';

@NgModule({
  declarations: [SearchListComponent],
  imports: [CommonModule, DebounceSearchModule, MaterialPipesModule],
  exports: [SearchListComponent],
})
export class SearchListModule {}
