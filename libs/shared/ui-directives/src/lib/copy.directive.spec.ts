import { SnackbarService } from '@material-uiclone/shared/util-services';
import { CopyDirective } from './copy.directive';

describe(CopyDirective.name, () => {
  let copyDirective: CopyDirective;
  let nav: any;
  let doc: any;
  let copiedText = '';
  let command = null;
  let snackbarService: SnackbarService;

  beforeEach(() => {
    nav = {
      clipboard: {
        writeText(text: string) {
          copiedText = text;
        },
      },
    };

    doc = {
      execCommand(text: string) {
        command = text;
      },
    };

    snackbarService = new SnackbarService();

    copyDirective = new CopyDirective(nav, doc, snackbarService);
  });

  it('exists', () => {
    expect(CopyDirective).toBeDefined();
  });

  it('copies correct text', async () => {
    const text = 'Hello World';
    copiedText = '';
    copyDirective.directivesCopy = text;

    await copyDirective.copy();

    expect(copiedText).toBe(text);
  });

  it('document copies', async () => {
    command = null;

    await copyDirective.copy();

    expect(command).toBe('copy');
  });

  it('notify snackbar of successful copy', async () => {
    jest.spyOn(copyDirective.snackbarService, 'callSnackbar');

    await copyDirective.copy();

    expect(copyDirective.snackbarService.callSnackbar).toHaveBeenCalledWith(
      'Copied Successfully'
    );
  });

  it('notify snackbar of failed copy', async () => {
    jest.spyOn(copyDirective.snackbarService, 'callSnackbar');
    jest
      .spyOn(copyDirective.navigator.clipboard, 'writeText')
      .mockRejectedValue(new Error());

    await copyDirective.copy();

    expect(copyDirective.snackbarService.callSnackbar).toHaveBeenCalledWith(
      'Copied Failed'
    );
  });
});
