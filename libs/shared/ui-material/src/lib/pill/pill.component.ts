import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { PillType } from './pill-type.enum';

@Component({
  selector: 'material-pill',
  templateUrl: './pill.component.html',
  styleUrls: ['./pill.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PillComponent {
  @Input() type = PillType.Info;
  @Input() label = '';
  @Input() iconClasses = '';
}
