import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { StarRatingComponent } from './star-rating.component';

export default {
  title: 'StarRatingComponent',
  component: StarRatingComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    })
  ],
} as Meta<StarRatingComponent>;

const Template: Story<StarRatingComponent> = (args: StarRatingComponent) => ({
  component: StarRatingComponent,
  props: args,
});


export const Primary = Template.bind({});
Primary.args = {
    rating:  5,
}