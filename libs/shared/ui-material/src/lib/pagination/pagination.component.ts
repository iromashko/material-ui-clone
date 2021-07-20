import {
  Component,
  ChangeDetectionStrategy,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';

@Component({
  selector: 'material-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PaginationComponent {
  @Input() totalItems = 1;
  @Input() pageSize = 25;
  @Input() currentPage = 1;
  @Input() step = 2;
  @Output() pageChange = new EventEmitter<number>();

  get totalPages(): number {
    return Math.ceil((this.totalItems || 1) / (this.pageSize || 1));
  }

  get isFirstPage(): boolean {
    return this.currentPage === 1;
  }

  get isLastPage(): boolean {
    return this.currentPage === this.totalPages;
  }

  get isNextDisabled(): boolean {
    return this.currentPage + this.step > this.totalPages;
  }

  get isPrevDisabled(): boolean {
    return this.currentPage - this.step < 1;
  }

  get pages(): number[] {
    const pages = [];

    if (this.currentPage > 1) {
      pages.push(this.currentPage - 1);
    }

    pages.push(this.currentPage);

    if (this.currentPage < this.totalPages) {
      pages.push(this.currentPage + 1);
    }

    if (this.currentPage + 1 < this.totalPages) {
      pages.push(this.currentPage + 2);
    }

    if (this.currentPage + 1 < this.totalPages && this.currentPage === 1) {
      pages.push(this.currentPage + 3);
    }

    return pages;
  }

  setPage(value: number): void {
    this.currentPage = value;
    this.pageChange.emit(value);
  }
}
