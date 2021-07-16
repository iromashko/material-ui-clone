import { Component } from '@angular/core';
import { AccordionItem } from '@material-uiclone/shared/ui-material';

@Component({
  selector: 'material-components',
  templateUrl: './components.component.html',
  styleUrls: ['./components.component.scss'],
})
export class ComponentsComponent {
  progressValue = 25;

  title = 'material';

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
}
