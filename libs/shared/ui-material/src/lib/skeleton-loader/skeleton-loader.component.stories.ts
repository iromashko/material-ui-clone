import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { SkeletonLoaderComponent } from './skeleton-loader.component';

export default {
  title: 'SkeletonLoaderComponent',
  component: SkeletonLoaderComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    }),
  ],
} as Meta<SkeletonLoaderComponent>;

const Template: Story<SkeletonLoaderComponent> = (
  args: SkeletonLoaderComponent
) => ({
  component: SkeletonLoaderComponent,
  props: args,
});

export const Primary = Template.bind({});
Primary.args = {
  width: '100%',
  height: '100%',
};
