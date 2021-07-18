import { Component } from '@angular/core';
import {
  AccordionItem,
  LoaderType,
} from '@material-uiclone/shared/ui-material';

@Component({
  selector: 'material-components',
  templateUrl: './components.component.html',
  styleUrls: ['./components.component.scss'],
})
export class ComponentsComponent {
  progressValue = 25;

  isLoading = false;
  loaderType = LoaderType.Loading;

  title = 'material';

  toggleValue = false;

  accordionItems: AccordionItem[] = [
    {
      title: 'Example 1',
      content: 'Example Content 1',
      isExpanded: false,
    },
    {
      title: 'Example 2',
      content: 'Example Content 2',
      isExpanded: false,
    },
  ];

  loadLoader(): void {
    this.loaderType = LoaderType.Loading;
    this.isLoading = true;
    setTimeout(() => {
      this.isLoading = false;
    }, 2000);
  }

  loadCircular(): void {
    this.loaderType = LoaderType.Circular;
    this.isLoading = true;
    setTimeout(() => {
      this.isLoading = false;
    }, 2000);
  }
}
