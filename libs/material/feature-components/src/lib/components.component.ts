import {
  AfterViewInit,
  Component,
  ComponentFactoryResolver,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
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
import { ModalDynamicComponent } from '@material-uiclone/shared/ui-material';
import { RefDirective } from '@material-uiclone/shared/ui-directives';
import { delay, take } from 'rxjs/operators';
import { of } from 'rxjs';

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

  @ViewChild(RefDirective) refDir!: RefDirective;

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

  dynamicModal = false;

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

    of(null)
      .pipe(take(1), delay(2000))
      .subscribe(() => {
        this.isLoading = false;
      });
  }

  loadCircular(): void {
    this.loaderType = LoaderType.Circular;
    this.isLoading = true;

    of(null)
      .pipe(take(1), delay(2000))
      .subscribe(() => {
        this.isLoading = false;
      });
  }

  debounceExampleMethod(value: string): void {
    console.log(`Debounce search`, value);
  }

  showModal(): void {
    const modalFactory = this.factoryResolver.resolveComponentFactory(
      ModalDynamicComponent
    );
    this.refDir.containerRef.clear();

    const modal = this.refDir.containerRef.createComponent(modalFactory);

    modal.instance.title = 'Modal Instance';

    modal.instance.closeModal.pipe(take(1)).subscribe(() => {
      this.refDir.containerRef.clear();
    });
  }

  constructor(
    private quoteService: QuoteService,
    private factoryResolver: ComponentFactoryResolver
  ) {}

  ngAfterViewInit(): void {
    of(null)
      .pipe(take(1), delay(100))
      .subscribe(() => {
        this.animationDisabled = false;
      });
  }
}
