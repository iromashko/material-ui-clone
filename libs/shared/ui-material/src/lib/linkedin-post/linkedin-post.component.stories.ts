import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { LinkedinPostComponent } from './linkedin-post.component';
import { RouterTestingModule } from '@angular/router/testing';

export default {
  title: 'LinkedinPostComponent',
  component: LinkedinPostComponent,
  decorators: [
    moduleMetadata({
      imports: [RouterTestingModule],
    }),
  ],
} as Meta<LinkedinPostComponent>;

const Template: Story<LinkedinPostComponent> = (
  args: LinkedinPostComponent
) => ({
  component: LinkedinPostComponent,
  props: args,
});

export const Primary = Template.bind({});
Primary.args = {};
