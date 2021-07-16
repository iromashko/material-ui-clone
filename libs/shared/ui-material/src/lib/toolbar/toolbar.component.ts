import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'material-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ToolbarComponent {
  @Input() public title = '';
}
