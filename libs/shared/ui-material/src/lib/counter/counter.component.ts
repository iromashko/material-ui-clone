import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'material-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CounterComponent {
  @Input() counter = 0;
  @Input() min = 0;
  @Input() max = Number.MAX_SAFE_INTEGER;

  increment(): void {
    if (this.counter < this.max) {
      this.counter++;
    }
  }

  decrement(): void {
    if (this.counter > 0) {
      this.counter--;
    }
  }
}
