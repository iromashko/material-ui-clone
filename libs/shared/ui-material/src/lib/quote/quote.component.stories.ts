import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { QuoteComponent } from './quote.component';

export default {
  title: 'QuoteComponent',
  component: QuoteComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    }),
  ],
} as Meta<QuoteComponent>;

const Template: Story<QuoteComponent> = (args: QuoteComponent) => ({
  component: QuoteComponent,
  props: args,
});

export const Primary = Template.bind({});
Primary.args = {
  quote: 'Do more of what makes you happy',
  author: 'Author',
  occupation: '',
};
