import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appClickFonts]'
})
export class ClickFontsDirective {

  @Input('appClickFonts') fontSize = 14;

  @HostListener('click') onClick(): void {
    this.renderer.setStyle(this.element.nativeElement, 'background-color', 'rgba(63,81,181,0.3)');
    this.renderer.setStyle(this.element.nativeElement, 'font-size', this.fontSize);
  }

  constructor(private element: ElementRef, private renderer: Renderer2) { }
}
