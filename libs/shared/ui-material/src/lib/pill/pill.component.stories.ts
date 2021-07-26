import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { PillType } from './pill-type.enum';
import { PillComponent } from './pill.component';

export default {
  title: 'PillComponent',
  component: PillComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    }),
  ],
} as Meta<PillComponent>;

const Template: Story<PillComponent> = (args: PillComponent) => ({
  component: PillComponent,
  props: args,
});

export const Primary = Template.bind({});
Primary.args = {
  type: PillType.Success,
  label: 'Success',
  iconClasses: 'fas fa-tag',
};
