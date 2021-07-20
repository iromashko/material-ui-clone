import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { generateUsers } from '@material-uiclone/shared/util-helpers';

export interface User {
  first: string;
  last: string;
  dob: string;
}

@Component({
  selector: 'material-simple-table',
  templateUrl: './simple-table.component.html',
  styleUrls: ['./simple-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SimpleTableComponent {
  @Input() tableData: User[] = generateUsers();
}
