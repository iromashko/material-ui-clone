import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccordionComponent } from './accordion.component';
import { CdkAccordionModule } from '@angular/cdk/accordion';

@NgModule({
  imports: [CommonModule, CdkAccordionModule],
  declarations: [AccordionComponent],
  exports: [AccordionComponent],
})
export class SharedUiAccordionModule {}
