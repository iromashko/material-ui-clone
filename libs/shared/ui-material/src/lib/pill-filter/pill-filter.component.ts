import {
  Component,
  ChangeDetectionStrategy,
  Input,
  EventEmitter,
} from '@angular/core';

@Component({
  selector: 'material-pill-filter',
  templateUrl: './pill-filter.component.html',
  styleUrls: ['./pill-filter.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PillFilterComponent {
  private pillLabels: string[] = [];

  @Input() set pills(value: string[]) {
    this.pillLabels = value;
    this.unselectedPills = value;
  }

  selected = new EventEmitter<string[]>();

  unselectedPills: string[] = [];
  selectedPills: string[] = [];

  addFilter(pillDetails: { hasBeenSelected: boolean; label: string }): void {
    if (pillDetails.hasBeenSelected) {
      const selectedIndex = this.unselectedPills.indexOf(pillDetails.label);
      const [selectedPill] = this.unselectedPills.splice(selectedIndex, 1);
      this.selectedPills.push(selectedPill);
      this.selected.emit(this.selectedPills);
    }
  }

  removeFilter(pillDetails: { hasBeenSelected: boolean; label: string }): void {
    if (!pillDetails.hasBeenSelected) {
      const selectedIndex = this.selectedPills.indexOf(pillDetails.label);
      const [selectedPill] = this.selectedPills.splice(selectedIndex, 1);
      this.unselectedPills.push(selectedPill);
    }
  }
}
