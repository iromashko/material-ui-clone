import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { ButtonGroupComponent } from './button-group.component';

export default {
  title: 'ButtonGroupComponent',
  component: ButtonGroupComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    })
  ],
} as Meta<ButtonGroupComponent>;

const Template: Story<ButtonGroupComponent> = (args: ButtonGroupComponent) => ({
  component: ButtonGroupComponent,
  props: args,
});


export const Primary = Template.bind({});
Primary.args = {
    options:  [],
    multi:  false,
}