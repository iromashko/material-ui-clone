import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { FieldsetComponent } from './fieldset.component';

export default {
  title: 'FieldsetComponent',
  component: FieldsetComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    })
  ],
} as Meta<FieldsetComponent>;

const Template: Story<FieldsetComponent> = (args: FieldsetComponent) => ({
  component: FieldsetComponent,
  props: args,
});


export const Primary = Template.bind({});
Primary.args = {
    legend:  '',
    isOpen:  false,
}