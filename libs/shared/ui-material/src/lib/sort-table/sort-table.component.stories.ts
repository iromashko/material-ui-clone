import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { SortTableComponent } from './sort-table.component';
import { generateSortTableUsers } from '@material-uiclone/shared/util-helpers';
import { SimpleTableModule } from '../simple-table/simple-table.module';

export default {
  title: 'SortTableComponent',
  component: SortTableComponent,
  decorators: [
    moduleMetadata({
      imports: [SimpleTableModule],
    }),
  ],
} as Meta<SortTableComponent>;

const Template: Story<SortTableComponent> = (args: SortTableComponent) => ({
  component: SortTableComponent,
  props: args,
});

export const Primary = Template.bind({});
Primary.args = {
  tableData: generateSortTableUsers(),
};
