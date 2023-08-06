import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appFont]'
})
export class FontDirective {

  constructor( private elementRef: ElementRef, private renderer2: Renderer2) {
    this.renderer2.setStyle(this.elementRef.nativeElement, 'font-zize', '20px');
   }

}
