import {
  Component,
  ChangeDetectionStrategy,
  Input,
  Output,
  EventEmitter,
  ViewEncapsulation,
} from '@angular/core';
import { ButtonMeta } from './button-meta.model';

@Component({
  selector: 'material-button-group',
  templateUrl: './button-group.component.html',
  styleUrls: ['./button-group.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class ButtonGroupComponent {
  @Input() options: ButtonMeta[] = [];
  @Output() selection = new EventEmitter<ButtonMeta>();
  @Input() multi = false;

  selected(selectedOption: ButtonMeta): void {
    if (this.multi) {
      this.options.forEach((option) => {
        option.isActive = Object.is(selectedOption, option)
          ? !option.isActive
          : option.isActive;
      });
    } else {
      this.options.forEach((option) => {
        option.isActive = Object.is(selectedOption, option);
      });
    }

    this.selection.emit(selectedOption);
  }
}
