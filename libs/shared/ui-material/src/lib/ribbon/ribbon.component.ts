import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { RibbonLocation } from './ribbon-location.enum';
import { RibbonType } from './ribbon.enum';

@Component({
  selector: 'material-ribbon',
  templateUrl: './ribbon.component.html',
  styleUrls: ['./ribbon.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RibbonComponent {
  @Input() content = '';
  @Input() location = RibbonLocation.BottomLeft;
  @Input() type = RibbonType.Success;
}
