import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RibbonComponent } from './ribbon.component';



@NgModule({
  declarations: [
    RibbonComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    RibbonComponent
  ]
})
export class RibbonModule { }
