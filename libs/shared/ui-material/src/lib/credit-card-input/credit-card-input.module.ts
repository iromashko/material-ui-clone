import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreditCardInputComponent } from './credit-card-input.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [CreditCardInputComponent],
  imports: [CommonModule, FormsModule],
  exports: [CreditCardInputComponent],
})
export class CreditCardInputModule {}
