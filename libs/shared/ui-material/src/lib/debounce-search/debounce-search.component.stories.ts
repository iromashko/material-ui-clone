import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { DebounceSearchComponent } from './debounce-search.component';

export default {
  title: 'DebounceSearchComponent',
  component: DebounceSearchComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    })
  ],
} as Meta<DebounceSearchComponent>;

const Template: Story<DebounceSearchComponent> = (args: DebounceSearchComponent) => ({
  component: DebounceSearchComponent,
  props: args,
});


export const Primary = Template.bind({});
Primary.args = {
    searchTerm:  '',
    placeholder:  'Search',
}