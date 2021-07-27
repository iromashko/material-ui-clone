import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { SimpleTableComponent } from './simple-table.component';
import { generateUsers } from '@material-uiclone/shared/util-helpers';

export default {
  title: 'SimpleTableComponent',
  component: SimpleTableComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    }),
  ],
} as Meta<SimpleTableComponent>;

const Template: Story<SimpleTableComponent> = (args: SimpleTableComponent) => ({
  component: SimpleTableComponent,
  props: args,
});

export const Primary = Template.bind({});
Primary.args = {
  tableData: generateUsers(),
};
