import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TwitterPostComponent } from './twitter-post.component';



@NgModule({
  declarations: [
    TwitterPostComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TwitterPostComponent
  ]
})
export class TwitterPostModule { }
