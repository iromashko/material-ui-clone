import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { BottomSheetComponent } from './bottom-sheet.component';

export default {
  title: 'BottomSheetComponent',
  component: BottomSheetComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    }),
  ],
} as Meta<BottomSheetComponent>;

const Template: Story<BottomSheetComponent> = (args: BottomSheetComponent) => ({
  component: BottomSheetComponent,
  props: args,
});

export const Primary = Template.bind({});
Primary.args = {
  isShown: true,
};
