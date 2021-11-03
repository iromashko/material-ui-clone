import { ButtonGroupComponent } from './button-group.component';
import { ButtonMeta } from './button-meta.model';

describe('Button Group Component', () => {
  let component: ButtonGroupComponent;
  it('Exists', () => {
    expect(ButtonGroupComponent).toBeDefined();
  });

  beforeEach(() => {
    component = new ButtonGroupComponent();
  });

  it('Options is empty', () => {
    expect(Array.isArray(component.options)).toBe(true);
    expect(component.options.length).toBe(0);
  });

  describe('Selected', () => {
    it('Selects the active options', () => {
      component.options = [
        new ButtonMeta({ title: 'title one', isActive: true }),
        new ButtonMeta({ title: 'title two' }),
        new ButtonMeta({ title: 'title three' }),
      ];

      component.selected(component.options[1]);

      expect(component.options[0].isActive).toBe(false);
      expect(component.options[1].isActive).toBe(true);
      expect(component.options[2].isActive).toBe(false);
    });
    it('Notifies parent of button selection', () => {
      component.options = [
        new ButtonMeta({ title: 'title one', isActive: true }),
        new ButtonMeta({ title: 'title two' }),
        new ButtonMeta({ title: 'title three' }),
      ];

      component.selection.subscribe((value: ButtonMeta) => {
        expect(value).toBe(component.options[2]);
      });

      component.selected(component.options[2]);
    });
  });
});
