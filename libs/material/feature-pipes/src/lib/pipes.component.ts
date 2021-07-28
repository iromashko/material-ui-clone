import { ChangeDetectorRef, Component } from '@angular/core';

@Component({
  selector: 'material-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.scss'],
})
export class PipesComponent {
  flattenData = [1, 2, [3], [4, [5, 6, [7]]]];

  html = '<a href="https://www.youtube.com/" target="blank">YouTube </a>';
  modifyFlatten(): void {
    this.flattenData.push(3, 5);
    this.cd.detectChanges();
  }

  reassignFlatten(): void {
    this.flattenData = [...this.flattenData];
  }

  constructor(private cd: ChangeDetectorRef) {}
}
