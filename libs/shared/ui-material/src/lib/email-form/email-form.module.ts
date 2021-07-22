import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmailFormComponent } from './email-form.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [EmailFormComponent],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [EmailFormComponent],
})
export class EmailFormModule {}
