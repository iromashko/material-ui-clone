import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { SearchListComponent } from './search-list.component';

export default {
  title: 'SearchListComponent',
  component: SearchListComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    })
  ],
} as Meta<SearchListComponent>;

const Template: Story<SearchListComponent> = (args: SearchListComponent) => ({
  component: SearchListComponent,
  props: args,
});


export const Primary = Template.bind({});
Primary.args = {
    items:  [],
}