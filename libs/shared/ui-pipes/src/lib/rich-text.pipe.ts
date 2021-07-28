import { Pipe, PipeTransform } from '@angular/core';
import { htmlRegex } from '@material-uiclone/shared/util-helpers';

@Pipe({
  name: 'richText',
})
export class RichTextPipe implements PipeTransform {
  transform(value: string): string {
    const html = this.parseNonEmptyHtml(value);
    const isValidHtml = htmlRegex.test(html);
    return isValidHtml ? html : '';
  }

  private parseNonEmptyHtml(html: string): string {
    const htmlTags = /<[^]*?>/g;
    const hasContent = html.replace(htmlTags, '').trim().length > 0;

    return hasContent ? html : '';
  }
}
