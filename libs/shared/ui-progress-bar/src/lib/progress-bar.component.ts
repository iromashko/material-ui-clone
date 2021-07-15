import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'progress-bar-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProgressBarComponent {
  @Input() public value = 0;
  @Input() public max = 100;
}
