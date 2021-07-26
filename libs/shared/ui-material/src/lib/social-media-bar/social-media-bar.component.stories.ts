import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { SocialMediaBarComponent } from './social-media-bar.component';

export default {
  title: 'SocialMediaBarComponent',
  component: SocialMediaBarComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    })
  ],
} as Meta<SocialMediaBarComponent>;

const Template: Story<SocialMediaBarComponent> = (args: SocialMediaBarComponent) => ({
  component: SocialMediaBarComponent,
  props: args,
});


export const Primary = Template.bind({});
Primary.args = {
    socialMedia:  [],
}