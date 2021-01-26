import { Directive, ElementRef, HostBinding, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  private border = 'none';

  @HostBinding('style.border') get getBorder(): string {
    return this.border;
  }

  @HostListener('mouseenter') onMouseEnter(): void {
    this.renderer.setStyle(this.element.nativeElement, 'background-color', 'rgba(63,81,181,0.1)');
    this.border = '1px solid #3F51B5';
  }

  @HostListener('mouseleave') onMouseLeave(): void {
    this.renderer.setStyle(this.element.nativeElement, 'background-color', 'inherit');
    this.border = 'none';
  }

  constructor(private element: ElementRef, private renderer: Renderer2) { }
}
