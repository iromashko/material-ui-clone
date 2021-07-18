import { Component, Input } from '@angular/core';

@Component({
  selector: 'material-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent {
  @Input() title = '';
  isHidden = true;

  close(): void {
    this.isHidden = true;
    console.log(this.isHidden);
  }

  open(): void {
    this.isHidden = false;
    console.log(this.isHidden);
  }
}
