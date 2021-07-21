import { Component } from '@angular/core';
import { fadeInOutAnimation } from '@material-uiclone/shared/ui-animations';

@Component({
  selector: 'material-other',
  templateUrl: './other.component.html',
  styleUrls: ['./other.component.scss'],
  animations: [fadeInOutAnimation],
})
export class OtherComponent {
  isInDOM = true;
}
