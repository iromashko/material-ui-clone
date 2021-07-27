import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'material-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PasswordComponent {
  passwordStrengthPercent = 0;

  private currentPassword = '';

  set password(value: string) {
    this.currentPassword = value;
    this.updatePasswordStrength();
  }

  get password(): string {
    return this.currentPassword;
  }

  get is8CharactersOrGreater(): boolean {
    return this.currentPassword.length >= 8;
  }

  get hasOneCapitalLetterOrMore(): boolean {
    return /(.*[A-Z].*)/.test(this.currentPassword);
  }

  get hasOneNumberOrMore(): boolean {
    return /(.*\d.*)/.test(this.currentPassword);
  }

  get hasOneSpecialCharacterOrMore(): boolean {
    return /\W|_/g.test(this.currentPassword);
  }

  private updatePasswordStrength(): void {
    let passwordStrength = 0;

    if (this.is8CharactersOrGreater) {
      passwordStrength += 25;
    }

    if (this.hasOneCapitalLetterOrMore) {
      passwordStrength += 25;
    }

    if (this.hasOneNumberOrMore) {
      passwordStrength += 25;
    }

    if (this.hasOneSpecialCharacterOrMore) {
      passwordStrength += 25;
    }

    this.passwordStrengthPercent = passwordStrength;
  }
}
