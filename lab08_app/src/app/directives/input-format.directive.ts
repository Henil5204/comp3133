import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
  standalone: false,
  selector: '[appInputFormat]'
})
export class InputFormatDirective {

  constructor(private el: ElementRef) {}

  @HostListener('blur') onBlur() {
    const value: string = this.el.nativeElement.value;
    this.el.nativeElement.value = value.toUpperCase();
  }
}
