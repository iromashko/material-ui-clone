import { countryList } from '@material-uiclone/shared/util-helpers';
import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { DebounceSearchModule } from '../debounce-search/debounce-search.module';
import { SearchListComponent } from './search-list.component';

export default {
  title: 'SearchListComponent',
  component: SearchListComponent,
  decorators: [
    moduleMetadata({
      imports: [DebounceSearchModule],
    }),
  ],
} as Meta<SearchListComponent>;

const Template: Story<SearchListComponent> = (args: SearchListComponent) => ({
  component: SearchListComponent,
  props: args,
});

export const Primary = Template.bind({});
Primary.args = {
  items: countryList(),
};
