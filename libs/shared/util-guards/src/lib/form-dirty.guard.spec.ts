import { FormControl, FormGroup } from '@angular/forms';
import { FormDirtyGuard, IFormDirty } from './form-dirty.guard';

describe(FormDirtyGuard.name, () => {
  let guard: FormDirtyGuard;
  let component: IFormDirty;

  beforeEach(async () => {
    guard = new FormDirtyGuard();
    component = {
      form: new FormGroup({
        firstName: new FormControl('', []),
      }),
    };
  });

  it('Exists', () => {
    expect(FormDirtyGuard).toBeDefined();
  });

  it('Can deactivate', () => {
    const result = guard.canDeactivate(component);

    expect(result).toBe(true);
  });

  it('ask the user if they like to proceed', () => {
    component.form.get('firstName')?.markAsDirty();

    jest.spyOn(window, 'confirm').mockReturnValue(true);

    guard.canDeactivate(component);

    expect(window.confirm).toHaveBeenCalled();
  });
});
