import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { CountdownTimerComponent } from './countdown-timer.component';

export default {
  title: 'CountdownTimerComponent',
  component: CountdownTimerComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    }),
  ],
} as Meta<CountdownTimerComponent>;

const Template: Story<CountdownTimerComponent> = (
  args: CountdownTimerComponent
) => ({
  component: CountdownTimerComponent,
  props: args,
});

export const Primary = Template.bind({});
Primary.args = {
  time: 'Jan 25, 2022 11:33:44',
};
