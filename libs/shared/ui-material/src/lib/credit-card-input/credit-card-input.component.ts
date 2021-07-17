import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'material-credit-card-input',
  templateUrl: './credit-card-input.component.html',
  styleUrls: ['./credit-card-input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CreditCardInputComponent {
  @Input() creditCardNumber = '';

  private readonly = false;

  get isReadonly() {
    return this.readonly;
  }

  @Input() set isReadonly(value: boolean) {
    this.creditCardNumber = value
      ? this.formatReadonlyCCNum(this.creditCardNumber)
      : this.creditCardNumber;
    this.readonly = value;
  }

  private formatReadonlyCCNum(ccNum: string): string {
    const parts: RegExpMatchArray | null = ccNum.match(/[\s\S]{1,4}/g) || [];
    if (parts) {
      const onlyLast4Shown = parts.map((part, index) => {
        if (index === parts.length - 1) {
          return part;
        }
        return 'xxxx';
      });

      return onlyLast4Shown.join('-');
    }
    return '';
  }
}
