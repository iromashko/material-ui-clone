import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { LinkedinPostComponent } from './linkedin-post.component';

export default {
  title: 'LinkedinPostComponent',
  component: LinkedinPostComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    })
  ],
} as Meta<LinkedinPostComponent>;

const Template: Story<LinkedinPostComponent> = (args: LinkedinPostComponent) => ({
  component: LinkedinPostComponent,
  props: args,
});


export const Primary = Template.bind({});
Primary.args = {
}