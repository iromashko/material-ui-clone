import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { SocialMediaBarComponent } from './social-media-bar.component';
import { SocialMedia } from './social-media-enum';

export default {
  title: 'SocialMediaBarComponent',
  component: SocialMediaBarComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    }),
  ],
} as Meta<SocialMediaBarComponent>;

const Template: Story<SocialMediaBarComponent> = (
  args: SocialMediaBarComponent
) => ({
  component: SocialMediaBarComponent,
  props: args,
});

export const Primary = Template.bind({});
Primary.args = {
  socialMedia: [
    {
      href: 'http://www.facebook.com',
      type: SocialMedia.Facebook,
    },
    {
      href: 'http://www.instagram.com',
      type: SocialMedia.Instagram,
    },
    {
      href: 'http://www.linkedin.com',
      type: SocialMedia.LinkedIn,
    },
    {
      href: 'http://www.twitter.com',
      type: SocialMedia.Twitter,
    },
    {
      href: 'http://www.youtube.com',
      type: SocialMedia.YouTube,
    },
  ],
};
