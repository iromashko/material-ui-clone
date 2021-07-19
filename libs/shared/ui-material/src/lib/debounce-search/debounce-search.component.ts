import {
  Component,
  ChangeDetectionStrategy,
  Output,
  EventEmitter,
  Input,
} from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'material-debounce-search',
  templateUrl: './debounce-search.component.html',
  styleUrls: ['./debounce-search.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DebounceSearchComponent {
  searchTerm = '';

  @Input() placeholder = 'Search';
  @Output() searchUpdate = new EventEmitter<string>();

  private searchUpdateSubject = new Subject<string>();

  updateSearchTerm(term: string): void {
    this.searchUpdateSubject.next(term);
  }

  constructor() {
    this.searchUpdateSubject
      .pipe(debounceTime(250), distinctUntilChanged())
      .subscribe((value) => this.searchUpdate.emit(value));
  }
}
