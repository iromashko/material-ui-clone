import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'material-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class DirectivesComponent {
  log(): void {
    console.log(`debounce directive`);
  }
}
