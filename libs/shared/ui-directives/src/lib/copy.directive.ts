import { Directive, HostListener, Inject, Input } from '@angular/core';
import { SnackbarService } from '@material-uiclone/shared/util-services';

@Directive({
  selector: '[directivesCopy]',
})
export class CopyDirective {
  constructor(
    @Inject('Navigator') public navigator: Navigator,
    @Inject('Document') public document: Document,
    public snackbarService: SnackbarService
  ) {}

  @Input() directivesCopy = '';

  @HostListener('click')
  async copy(): Promise<void> {
    try {
      await this.navigator.clipboard.writeText(this.directivesCopy);
      this.document.execCommand('copy');
      this.snackbarService.callSnackbar('Copied Successfully');
    } catch (error) {
      this.snackbarService.callSnackbar('Copied Failed');
    }
  }
}
