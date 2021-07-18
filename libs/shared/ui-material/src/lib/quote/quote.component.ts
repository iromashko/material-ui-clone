import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'material-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class QuoteComponent {
  @Input() quote = '';
  @Input() author = '';
  @Input() occupation = '';
}
