import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { ButtonGroupComponent } from './button-group.component';
import { ButtonMeta } from './button-meta.model';

export default {
  title: 'ButtonGroupComponent',
  component: ButtonGroupComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    }),
  ],
} as Meta<ButtonGroupComponent>;

const Template: Story<ButtonGroupComponent> = (args: ButtonGroupComponent) => ({
  component: ButtonGroupComponent,
  props: args,
});

export const Single = Template.bind({});
Single.args = {
  options: [
    new ButtonMeta({ id: 1, title: 'Bold' }),
    new ButtonMeta({ id: 2, title: 'Italic' }),
    new ButtonMeta({ id: 3, title: 'Underline' }),
  ],
  multi: false,
};

export const Multi = Template.bind({});
Multi.args = {
  options: [
    new ButtonMeta({ id: 1, title: 'Bold' }),
    new ButtonMeta({ id: 2, title: 'Italic' }),
    new ButtonMeta({ id: 3, title: 'Underline' }),
  ],
  multi: true,
};
