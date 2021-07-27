import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { AccordionComponent } from './accordion.component';

export default {
  title: 'AccordionComponent',
  component: AccordionComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    }),
  ],
} as Meta<AccordionComponent>;

const Template: Story<AccordionComponent> = (args: AccordionComponent) => ({
  component: AccordionComponent,
  props: args,
});

export const Primary = Template.bind({});
Primary.args = {
  items: [
    {
      title: 'Example 1',
      content: 'Example Content 1',
      isExpanded: false,
    },
    {
      title: 'Example 2',
      content: 'Example Content 2',
      isExpanded: false,
    },
  ],
};
