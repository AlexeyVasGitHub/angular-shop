import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighlightDirective } from './directives/highlight.directive';
import { ClickFontsDirective } from './directives/click-fonts.directive';



@NgModule({
  declarations: [HighlightDirective, ClickFontsDirective],
  exports: [
    HighlightDirective
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
