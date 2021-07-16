import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'material-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardComponent {
  @Input() public title = '';
  @Input() public subTitle = '';
  @Input() public iconClasses = '';
}
