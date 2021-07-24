import { Component, HostListener, Input } from '@angular/core';

@Component({
  selector: 'material-toggle',
  templateUrl: './toggle.component.html',
  styleUrls: ['./toggle.component.scss'],
})
export class ToggleComponent {
  @Input() isOn: boolean | null = false;

  @HostListener('click')
  toggleOn(): void {
    this.isOn = !this.isOn;
  }
}
