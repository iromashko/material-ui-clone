import { Component } from '@angular/core';

@Component({
  selector: 'material-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.scss'],
})
export class DirectivesComponent {
  log(): void {
    console.log(`debounce directive`);
  }
}
