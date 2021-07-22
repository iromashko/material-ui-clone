import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'material-email-form',
  templateUrl: './email-form.component.html',
  styleUrls: ['./email-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmailFormComponent {
  form = this.fb.group({
    name: ['', [Validators.minLength(2), Validators.required]],
    email: ['', [Validators.email, Validators.required]],
    message: ['', Validators.required],
  });

  constructor(private fb: FormBuilder) {}

  submitMessage(): void {
    console.log(this.form.invalid);
  }
}
