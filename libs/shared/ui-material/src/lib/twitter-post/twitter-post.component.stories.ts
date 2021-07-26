import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { TwitterPostComponent } from './twitter-post.component';

export default {
  title: 'TwitterPostComponent',
  component: TwitterPostComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    })
  ],
} as Meta<TwitterPostComponent>;

const Template: Story<TwitterPostComponent> = (args: TwitterPostComponent) => ({
  component: TwitterPostComponent,
  props: args,
});


export const Primary = Template.bind({});
Primary.args = {
    baseHref:  'https://google.com',
    hashTags:  ['Angular', 'Nest.js', 'Typescript', 'Kubernetes'],
}