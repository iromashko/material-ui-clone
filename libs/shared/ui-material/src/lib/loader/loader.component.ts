import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'material-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoaderComponent {
  @Input() isLoading = false;
}
