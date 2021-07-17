import {
  Component,
  ChangeDetectionStrategy,
  Input,
  OnInit,
} from '@angular/core';
import { LoaderType } from './loader-type.enum';

@Component({
  selector: 'material-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss'],
})
export class LoaderComponent implements OnInit {
  @Input() isLoading = false;
  @Input() type = LoaderType.Circular;

  loaderType = LoaderType;

  get loadingText(): string {
    return `${this.loading}${this.loadingPeriods}`;
  }

  private loading = 'Loading';
  private loadingPeriods = '.\0\0';

  ngOnInit(): void {
    if (this.type === LoaderType.Loading) {
      this.updateLoaderPeriods();
    }
  }

  private updateLoaderPeriods(): void {
    let currentStep = 0;

    setInterval(() => {
      switch (currentStep % 3) {
        case 0:
          this.loadingPeriods = '..\0';
          currentStep++;
          break;
        case 1:
          currentStep++;
          this.loadingPeriods = '...';
          break;
        case 2:
          currentStep = 0;
          this.loadingPeriods = '.\0\0';
          break;
      }
    }, 500);
  }
}
