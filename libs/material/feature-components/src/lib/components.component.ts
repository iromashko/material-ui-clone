import { AfterViewInit, Component } from '@angular/core';
import {
  AccordionItem,
  ButtonMeta,
  LoaderType,
  PillType,
  RibbonLocation,
  RibbonType,
} from '@material-uiclone/shared/ui-material';
import { TabItem } from '@material-uiclone/shared/ui-material';
import {
  generateUsers,
  generateSortTableUsers,
  countryList,
} from '@material-uiclone/shared/util-helpers';
import { QuoteService } from '@material-uiclone/shared/util-services';

export interface User {
  first: string;
  last: string;
  dob: string;
}

@Component({
  selector: 'material-components',
  templateUrl: './components.component.html',
  styleUrls: ['./components.component.scss'],
})
export class ComponentsComponent implements AfterViewInit {
  RibbonType = RibbonType;
  RibbonLocation = RibbonLocation;
  ribbonStyle = { type: RibbonType.Info, location: RibbonLocation.BottomLeft };

  animationDisabled = true;

  buttonToggleOptions: ButtonMeta[] = [
    new ButtonMeta({ id: 1, title: 'Bold' }),
    new ButtonMeta({ id: 2, title: 'Italic' }),
    new ButtonMeta({ id: 3, title: 'Underline' }),
  ];

  buttonToggleOptionsMulti: ButtonMeta[] = [
    new ButtonMeta({ id: 1, title: 'Bold', isActive: true }),
    new ButtonMeta({ id: 2, title: 'Italic' }),
    new ButtonMeta({ id: 3, title: 'Underline' }),
  ];

  progressValue = 25;

  isLoading = false;
  loaderType = LoaderType.Loading;

  title = 'material';

  toggleValue = false;

  countriesList = countryList();

  PillType = PillType;

  randomQuote$ = this.quoteService.randomQuote$;

  accordionItems: AccordionItem[] = [
    {
      title: 'Example 1',
      content: 'Example Content 1',
      isExpanded: false,
    },
    {
      title: 'Example 2',
      content: 'Example Content 2',
      isExpanded: false,
    },
  ];

  loaded = true;

  tableDataUsers = generateUsers();
  sortTableData = generateSortTableUsers();

  selectedTab = 0;

  tabs: TabItem[] = [
    { title: 'Tab 1', active: true },
    { title: 'Tab 2', active: false },
    { title: 'Tab 3', active: false },
    { title: 'Tab 4', active: false },
  ];

  loadLoader(): void {
    this.loaderType = LoaderType.Loading;
    this.isLoading = true;
    setTimeout(() => {
      this.isLoading = false;
    }, 2000);
  }

  loadCircular(): void {
    this.loaderType = LoaderType.Circular;
    this.isLoading = true;
    setTimeout(() => {
      this.isLoading = false;
    }, 2000);
  }

  debounceExampleMethod(value: string): void {
    console.log(`Debounce search`, value);
  }

  constructor(private quoteService: QuoteService) {}

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.animationDisabled = false;
    }, 100);
  }
}
