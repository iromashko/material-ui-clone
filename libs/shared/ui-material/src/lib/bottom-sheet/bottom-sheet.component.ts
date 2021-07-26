import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'material-bottom-sheet',
  templateUrl: './bottom-sheet.component.html',
  styleUrls: ['./bottom-sheet.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class BottomSheetComponent {
  isShown = false;

  show(): void {
    this.isShown = true;
  }

  hide(): void {
    this.isShown = false;
  }
}
