import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { Chance as generateRandom } from 'chance';

interface User {
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
  @Input() tableData: User[] = Array.from({ length: 10 }).map(() => ({
    first: generateRandom().first(),
    last: generateRandom().last(),
    dob: generateRandom().birthday({ string: true }) as string,
  }));
}
