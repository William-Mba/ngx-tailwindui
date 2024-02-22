import { BorderRadius } from "./../../types/borders/border-radius";
import { Directive, ElementRef, HostListener, Input, OnInit } from '@angular/core';
import { IconVariant } from '../../types/common';
import { BgColor } from '../../types/backgrounds/background-color';
import { BorderColor } from '../../types/borders/border-color';
import { OutlineColor } from '../../types/borders/outline-color';

@Directive({
  selector: 'nxt-icon,[nxt-icon]',
  standalone: true
})
export class IconDirective implements OnInit, Icon {

  @Input() className!: string;
  @Input() variant: IconVariant = 'standard';
  @Input() borderRadius!: BorderRadius;
  @Input() bgColor!: BgColor;
  @Input() margin!: string;
  @Input() borderColor!: BorderColor;
  @Input() outlineColor!: OutlineColor;
  @Input() isActive: boolean = false;

  constructor (private el: ElementRef<Pick<Element, "className" | 'classList'>>) { }

  ngOnInit(): void {
    this.buildStyle();
  }

  @HostListener('click') onClick() {
    this.isActive = this.isActive === false ? true : false

    this.el.nativeElement.classList.toggle('outline-indigo-400', this.isActive)
    this.el.nativeElement.classList.toggle('dark:outline-indigo-200', this.isActive)

    if (this.variant === 'standard') {
      this.el.nativeElement.classList.toggle('dark:outline-indigo-950'); // toggle initialized value
    }

    if (this.variant === 'contained') {
      this.el.nativeElement.classList.toggle('outline', this.isActive)
      this.el.nativeElement.classList.toggle('outline-1', this.isActive)
    }
  }

  protected getBase(extra?: string) {
    return `
      cursor-pointer inline-flex 
      text-nowrap font-bold rounded-full 
      justify-center ${this.margin ?? ''} ${extra}
    `
  }

  protected buildStandard() {
    this.addClass(this.getBase());

    if (!this.outlineColor) {
      this.outlineColor = 'outline-indigo-200'
      this.addClass('dark:outline-indigo-950');
    }
    this.addClass(this.outlineColor);
    this.addClass('outline outline-1');
    this.addClass('hover:bg-indigo-800 hover:bg-opacity-5')
  }

  protected buildContained() {
    this.addClass(this.getBase());

    if (!this.bgColor) {
      this.bgColor = 'bg-indigo-200';
      this.addClass('bg-opacity-15')
      this.addClass('dark:bg-indigo-800')
      this.addClass('dark:bg-opacity-15')
      this.addClass('hover:bg-opacity-30 dark:hover:bg-opacity-10');
    }
    this.addClass(this.bgColor);
  }

  private buildStyle() {
    switch (this.variant) {
      case 'standard': this.buildStandard();
        break;
      case 'contained': this.buildContained()
        break;
    }
    this.addClass(this.className)
  }

  private addClass(...classList: string[]) {
    classList.forEach(c => this.el.nativeElement.className += ` ${c} `)
  }
}

export interface Icon {
  variant: IconVariant
  bgColor: BgColor
  margin: string
  borderColor: BorderColor
  outlineColor: OutlineColor
  className: string
  borderRadius: BorderRadius
  isActive: boolean
}