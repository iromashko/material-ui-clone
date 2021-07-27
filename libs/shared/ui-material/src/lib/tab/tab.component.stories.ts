import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { TabComponent } from './tab.component';

export default {
  title: 'TabComponent',
  component: TabComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    }),
  ],
} as Meta<TabComponent>;

const Template: Story<TabComponent> = (args: TabComponent) => ({
  component: TabComponent,
  props: args,
});

export const Primary = Template.bind({});
Primary.args = {
  tabs: [
    { title: 'Tab 1', active: true },
    { title: 'Tab 2', active: false },
    { title: 'Tab 3', active: false },
    { title: 'Tab 4', active: false },
  ],
};
