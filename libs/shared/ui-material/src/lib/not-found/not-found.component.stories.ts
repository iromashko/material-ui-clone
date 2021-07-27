import { RouterTestingModule } from '@angular/router/testing';
import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { NotFoundComponent } from './not-found.component';

export default {
  title: 'NotFoundComponent',
  component: NotFoundComponent,
  decorators: [
    moduleMetadata({
      imports: [RouterTestingModule],
    }),
  ],
} as Meta<NotFoundComponent>;

const Template: Story<NotFoundComponent> = (args: NotFoundComponent) => ({
  component: NotFoundComponent,
  props: args,
});

export const Primary = Template.bind({});
Primary.args = {};
