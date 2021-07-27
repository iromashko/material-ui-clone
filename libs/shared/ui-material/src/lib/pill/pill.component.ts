import {
  Component,
  ChangeDetectionStrategy,
  Input,
  ViewEncapsulation,
  Output,
  EventEmitter,
} from '@angular/core';
import { PillType } from './pill-type.enum';

@Component({
  selector: 'material-pill',
  templateUrl: './pill.component.html',
  styleUrls: ['./pill.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class PillComponent {
  @Input() type = PillType.Info;
  @Input() label = '';
  @Input() iconClasses = '';
  @Input() isActive = false;
  @Input() canBeSelected = false;
  @Output() selected = new EventEmitter<{
    hasBeenSelected: boolean;
    label: string;
  }>();

  toggleActive(): void {
    this.isActive = !this.isActive;

    this.selected.emit({ hasBeenSelected: this.isActive, label: this.label });
  }
}
