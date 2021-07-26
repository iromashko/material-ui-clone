import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { ProgressBarComponent } from './progress-bar.component';

export default {
  title: 'ProgressBarComponent',
  component: ProgressBarComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    })
  ],
} as Meta<ProgressBarComponent>;

const Template: Story<ProgressBarComponent> = (args: ProgressBarComponent) => ({
  component: ProgressBarComponent,
  props: args,
});


export const Primary = Template.bind({});
Primary.args = {
    value:  0,
    max:  100,
}