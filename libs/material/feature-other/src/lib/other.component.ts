import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { fadeInOutAnimation } from '@material-uiclone/shared/ui-animations';

@Component({
  selector: 'material-other',
  templateUrl: './other.component.html',
  styleUrls: ['./other.component.scss'],
  animations: [fadeInOutAnimation],
})
export class OtherComponent {
  isInDOM = true;

  form = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(2)]],
  });

  submitForm(): void {
    this.form.reset(this.form.value);
    console.log(`submit form`, this.form.value);
  }

  constructor(private fb: FormBuilder) {}
}
