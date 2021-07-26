import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { CounterComponent } from './counter.component';

export default {
  title: 'CounterComponent',
  component: CounterComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    })
  ],
} as Meta<CounterComponent>;

const Template: Story<CounterComponent> = (args: CounterComponent) => ({
  component: CounterComponent,
  props: args,
});


export const Primary = Template.bind({});
Primary.args = {
    counter:  0,
    min:  0,
    max:  Number.MAX_SAFE_INTEGER,
}