import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

export interface ToolbarLink {
  path: string;
  title: string;
}
@Component({
  selector: 'material-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ToolbarComponent {
  @Input() public title = '';
}
