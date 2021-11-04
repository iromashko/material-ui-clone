import { RichTextPipe } from './rich-text.pipe';

describe(RichTextPipe.name, () => {
  let pipe: RichTextPipe;

  beforeEach(() => {
    pipe = new RichTextPipe();
  });
  it('exists', () => {
    expect(RichTextPipe).toBeDefined();
  });

  it('empty html returns empty string', () => {
    const invalidHtml = '<a></a>';

    const transformResult = pipe.transform(invalidHtml);

    expect(transformResult).toBe('');
  });

  it('non valid html returns empty', () => {
    const invalidHtml = '<a> 12345';

    const transformResult = pipe.transform(invalidHtml);

    expect(transformResult).toBe('');
  });

  it('valid html returns the html', () => {
    const validHtml = '<button>Hello World</button>';

    const transformResult = pipe.transform(validHtml);

    expect(transformResult).toBe(validHtml);
  });
});
