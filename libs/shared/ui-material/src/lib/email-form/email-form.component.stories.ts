import { ReactiveFormsModule } from '@angular/forms';
import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { EmailFormComponent } from './email-form.component';

export default {
  title: 'EmailFormComponent',
  component: EmailFormComponent,
  decorators: [
    moduleMetadata({
      imports: [ReactiveFormsModule],
    }),
  ],
} as Meta<EmailFormComponent>;

const Template: Story<EmailFormComponent> = (args: EmailFormComponent) => ({
  component: EmailFormComponent,
  props: args,
});

export const Primary = Template.bind({});
Primary.args = {};
