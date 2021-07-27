import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { SnackbarComponent } from './snackbar.component';

export default {
  title: 'SnackbarComponent',
  component: SnackbarComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    }),
  ],
} as Meta<SnackbarComponent>;

const Template: Story<SnackbarComponent> = (args: SnackbarComponent) => ({
  component: SnackbarComponent,
  props: args,
});

export const Primary = Template.bind({});
Primary.args = {
  message: 'Example Message',
  isShown: true,
};
