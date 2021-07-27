import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { PillModule } from '../pill/pill.module';
import { PillFilterComponent } from './pill-filter.component';

export default {
  title: 'PillFilterComponent',
  component: PillFilterComponent,
  decorators: [
    moduleMetadata({
      imports: [PillModule],
    }),
  ],
} as Meta<PillFilterComponent>;

const Template: Story<PillFilterComponent> = (args: PillFilterComponent) => ({
  component: PillFilterComponent,
  props: args,
});

export const Primary = Template.bind({});
Primary.args = {
  pills: [
    'Angular',
    'Nest',
    'Cypress',
    'Storybook',
    'Kubernetes',
    'NX',
    'Tailwind',
  ],
  unselectedPills: [
    'Angular',
    'Nest',
    'Cypress',
    'Storybook',
    'Kubernetes',
    'NX',
    'Tailwind',
  ],
  selectedPills: [],
};
