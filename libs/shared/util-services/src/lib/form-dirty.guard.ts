import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { CanDeactivate } from '@angular/router';

export interface IFormDirty {
  form: FormGroup;
}

@Injectable({
  providedIn: 'root',
})
export class FormDirtyGuard implements CanDeactivate<IFormDirty> {
  canDeactivate(component: IFormDirty): boolean {
    if (component.form.dirty) {
      return confirm('Your form is dirty. Are you sure you want to leave?');
    }

    return true;
  }
}
