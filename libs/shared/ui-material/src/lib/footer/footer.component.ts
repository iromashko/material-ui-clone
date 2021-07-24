import { Component } from '@angular/core';

@Component({
  selector: 'material-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  year = new Date().getFullYear();
}
