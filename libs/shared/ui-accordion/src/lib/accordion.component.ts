import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { AccordionItem } from './accordion.interface';

@Component({
  selector: 'accordion-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AccordionComponent {
  @Input() public items: AccordionItem[] = [];

  public toggle(item: AccordionItem): void {
    item.isExpanded = !item.isExpanded;
  }
}
