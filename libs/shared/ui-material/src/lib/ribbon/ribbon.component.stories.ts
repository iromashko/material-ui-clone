import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { RibbonLocation } from './ribbon-location.enum';
import { RibbonComponent } from './ribbon.component';
import { RibbonType } from './ribbon.enum';

export default {
  title: 'RibbonComponent',
  component: RibbonComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    }),
  ],
} as Meta<RibbonComponent>;

const Template: Story<RibbonComponent> = (args: RibbonComponent) => ({
  component: RibbonComponent,
  props: args,
});

export const Primary = Template.bind({});
Primary.args = {
  content: '',
  location: RibbonLocation.BottomLeft,
  type: RibbonType.Success,
};
