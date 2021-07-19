import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'material-search-list',
  templateUrl: './search-list.component.html',
  styleUrls: ['./search-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchListComponent {
  searchTerm = '';

  @Input() items: string[] = [];

  hasBeenSelected = false;

  updateSearchTerm(value: string): void {
    this.searchTerm = value;
    this.hasBeenSelected = false;
  }

  selectSearchTerm(value: string): void {
    this.searchTerm = value;
    this.hasBeenSelected = true;
  }
}
