import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { htmlRegex } from '@material-uiclone/shared/util-helpers';

@Component({
  selector: 'material-rich-text-viewer',
  templateUrl: './rich-text-viewer.component.html',
  styleUrls: ['./rich-text-viewer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RichTextViewerComponent {
  validHtml = '';

  @Input() set htmlText(value: string) {
    const html = this.parseNonEmptyHtml(value);
    const isValidHtml = htmlRegex.test(html);

    this.validHtml = isValidHtml ? html : '';
  }

  private parseNonEmptyHtml(html: string = ''): string {
    const htmlTags = /<[^]*?>/g;
    const hasContent = html.replace(htmlTags, '').trim().length > 0;

    return hasContent ? html : '';
  }
}
