import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccordionComponent } from './accordion.component';
import { CdkAccordionModule } from '@angular/cdk/accordion';

@NgModule({
  declarations: [AccordionComponent],
  imports: [CommonModule, CdkAccordionModule],
  exports: [AccordionComponent],
})
export class AccordionModule {}
