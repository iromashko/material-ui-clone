import { Component } from '@angular/core';
import { AccordionItem } from '@material-uiclone/shared/ui-material';

@Component({
  selector: 'material-showcase',
  templateUrl: './showcase.component.html',
  styleUrls: ['./showcase.component.scss'],
})
export class ShowcaseComponent {
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
