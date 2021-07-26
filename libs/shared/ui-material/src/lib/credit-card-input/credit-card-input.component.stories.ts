import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { CreditCardInputComponent } from './credit-card-input.component';

export default {
  title: 'CreditCardInputComponent',
  component: CreditCardInputComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    }),
  ],
} as Meta<CreditCardInputComponent>;

const Template: Story<CreditCardInputComponent> = (
  args: CreditCardInputComponent
) => ({
  component: CreditCardInputComponent,
  props: args,
});

export const Primary = Template.bind({});
Primary.args = {
  creditCardNumber: '',
  isReadonly: false,
};
