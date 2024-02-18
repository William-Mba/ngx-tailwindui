import { Directive, ElementRef, Input, OnInit } from '@angular/core';
import { ClassName, IconVariant, Variant } from '../../types/common';

@Directive({
  selector: 'nxt-icon,[nxt-icon]',
  standalone: true
})
export class IconDirective implements OnInit {

  @Input() className!: ClassName
  @Input() variant!: IconVariant

  constructor (private el: ElementRef<Pick<Element, "className">>) { }

  ngOnInit(): void {
    this.setStyle();
  }

  protected getBase(extra?: string) {
    return `
      border cursor-pointer
      inline-flex justify-center
      hover:bg-gray-800 hover:bg-opacity-5
      dark:hover:bg-neutral-800 dark:hover:bg-opacity-80
      ${extra}
    `
  }

  get standard(){
    return `
    
    `
  }
  get filled(){
    return `
    
    `
  }
  get outlined(){
    return `
    
    `
  }

  private setStyle() {
    this.addClass(this.className ?? this.getBase())
  }

  private addClass(...classList: string[]) {
    classList.forEach(c => this.el.nativeElement.className += ` ${c} `)
  }
}