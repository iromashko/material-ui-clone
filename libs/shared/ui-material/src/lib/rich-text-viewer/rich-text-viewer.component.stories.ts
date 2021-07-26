import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { RichTextViewerComponent } from './rich-text-viewer.component';

export default {
  title: 'RichTextViewerComponent',
  component: RichTextViewerComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    })
  ],
} as Meta<RichTextViewerComponent>;

const Template: Story<RichTextViewerComponent> = (args: RichTextViewerComponent) => ({
  component: RichTextViewerComponent,
  props: args,
});


export const Primary = Template.bind({});
Primary.args = {
    htmlText:  '',
}