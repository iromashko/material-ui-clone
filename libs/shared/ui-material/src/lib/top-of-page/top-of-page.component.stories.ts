import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { TopOfPageComponent } from './top-of-page.component';

export default {
  title: 'TopOfPageComponent',
  component: TopOfPageComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    }),
  ],
} as Meta<TopOfPageComponent>;

const Template: Story<TopOfPageComponent> = (args: TopOfPageComponent) => ({
  component: TopOfPageComponent,
  props: args,
});

export const Primary = Template.bind({});
Primary.args = {
  isShown: true,
};
