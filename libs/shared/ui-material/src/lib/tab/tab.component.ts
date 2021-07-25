import {
  Component,
  ChangeDetectionStrategy,
  Input,
  Output,
  EventEmitter,
  ViewEncapsulation,
} from '@angular/core';

export interface TabItem {
  title: string;
  active: boolean;
}

@Component({
  selector: 'material-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class TabComponent {
  @Input() tabs: TabItem[] = [];
  @Output() selectedTabIndex = new EventEmitter<number>();

  selectTab(selected: TabItem, index: number): void {
    this.tabs.forEach((tab) => {
      tab.active = selected === tab;
    });
    this.selectedTabIndex.emit(index);
  }
}
