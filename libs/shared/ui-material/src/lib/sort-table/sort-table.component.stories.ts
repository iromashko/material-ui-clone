import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { SortTableComponent } from './sort-table.component';

export default {
  title: 'SortTableComponent',
  component: SortTableComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    })
  ],
} as Meta<SortTableComponent>;

const Template: Story<SortTableComponent> = (args: SortTableComponent) => ({
  component: SortTableComponent,
  props: args,
});


export const Primary = Template.bind({});
Primary.args = {
    tableData:  [],
}