import {
  Component,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  Input,
} from '@angular/core';

@Component({
  selector: 'material-fieldset',
  templateUrl: './fieldset.component.html',
  styleUrls: ['./fieldset.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FieldsetComponent {
  @Input() legend = '';
  @Input() isOpen = false;

  toggle(): void {
    this.isOpen = !this.isOpen;
  }
}
