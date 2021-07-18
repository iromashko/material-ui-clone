import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RichTextViewerComponent } from './rich-text-viewer.component';



@NgModule({
  declarations: [
    RichTextViewerComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    RichTextViewerComponent
  ]
})
export class RichTextViewerModule { }
