import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'material-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class FooterComponent {
  year = new Date().getFullYear();
}
