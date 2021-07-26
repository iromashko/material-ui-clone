import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { ModalComponent } from './modal.component';

export default {
  title: 'ModalComponent',
  component: ModalComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    })
  ],
} as Meta<ModalComponent>;

const Template: Story<ModalComponent> = (args: ModalComponent) => ({
  component: ModalComponent,
  props: args,
});


export const Primary = Template.bind({});
Primary.args = {
    title:  '',
}