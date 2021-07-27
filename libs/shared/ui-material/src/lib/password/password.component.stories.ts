import { FormsModule } from '@angular/forms';
import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { PasswordComponent } from './password.component';

export default {
  title: 'PasswordComponent',
  component: PasswordComponent,
  decorators: [
    moduleMetadata({
      imports: [FormsModule],
    }),
  ],
} as Meta<PasswordComponent>;

const Template: Story<PasswordComponent> = (args: PasswordComponent) => ({
  component: PasswordComponent,
  props: args,
});

export const Primary = Template.bind({});
Primary.args = {};
