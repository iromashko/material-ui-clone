import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { PaginationComponent } from './pagination.component';

export default {
  title: 'PaginationComponent',
  component: PaginationComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    }),
  ],
} as Meta<PaginationComponent>;

const Template: Story<PaginationComponent> = (args: PaginationComponent) => ({
  component: PaginationComponent,
  props: args,
});

export const Primary = Template.bind({});
Primary.args = {
  totalItems: 200,
  pageSize: 25,
  currentPage: 1,
  step: 2,
};
