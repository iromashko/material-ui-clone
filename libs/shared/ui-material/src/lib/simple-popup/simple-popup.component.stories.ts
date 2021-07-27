import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { SimplePopupComponent } from './simple-popup.component';

export default {
  title: 'SimplePopupComponent',
  component: SimplePopupComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    }),
  ],
} as Meta<SimplePopupComponent>;

const Template: Story<SimplePopupComponent> = (args: SimplePopupComponent) => ({
  component: SimplePopupComponent,
  props: args,
});

export const Primary = Template.bind({});
Primary.args = {
  message: 'Simple Popup',
  isShown: true,
};
