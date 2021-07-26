import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { LoaderType } from './loader-type.enum';
import { LoaderComponent } from './loader.component';

export default {
  title: 'LoaderComponent',
  component: LoaderComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    }),
  ],
} as Meta<LoaderComponent>;

const Template: Story<LoaderComponent> = (args: LoaderComponent) => ({
  component: LoaderComponent,
  props: args,
});

export const Primary = Template.bind({});
Primary.args = {
  isLoading: false,
  type: LoaderType.Circular,
};
