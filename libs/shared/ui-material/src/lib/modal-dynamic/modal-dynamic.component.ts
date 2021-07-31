import {
  Component,
  ChangeDetectionStrategy,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';

@Component({
  selector: 'material-modal-dynamic',
  templateUrl: './modal-dynamic.component.html',
  styleUrls: ['./modal-dynamic.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ModalDynamicComponent {
  @Input() title = 'Default Title';
  @Output() closeModal = new EventEmitter<void>();
}
