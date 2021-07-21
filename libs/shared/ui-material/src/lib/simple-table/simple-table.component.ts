import {
  Component,
  ChangeDetectionStrategy,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';

@Component({
  selector: 'material-simple-table',
  templateUrl: './simple-table.component.html',
  styleUrls: ['./simple-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SimpleTableComponent {
  @Input() tableData: any[] = [];

  @Output() headerSelected = new EventEmitter<{ key: unknown; value: any }>();

  headerSelection(key: unknown, value: any): void {
    this.headerSelected.emit({ value, key });
  }
}
