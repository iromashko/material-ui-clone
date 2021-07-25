import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import {
  fadeInOutAnimation,
  slideRightAnimation,
} from '@material-uiclone/shared/ui-animations';
import { TabItem } from '@material-uiclone/shared/ui-material';

@Component({
  selector: 'material-other',
  templateUrl: './other.component.html',
  styleUrls: ['./other.component.scss'],
  animations: [fadeInOutAnimation, slideRightAnimation],
})
export class OtherComponent {
  isInDOM = true;

  form = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(2)]],
  });

  selectedTab = 0;

  tabs: TabItem[] = [
    { title: 'Tab 1', active: true },
    { title: 'Tab 2', active: false },
  ];

  submitForm(): void {
    this.form.reset(this.form.value);
    console.log(`submit form`, this.form.value);
  }

  constructor(private fb: FormBuilder) {}
}
