import { NgTemplateOutlet } from '@angular/common';
import { Directive, TemplateRef } from '@angular/core';

@Directive({
  selector: '[nxtContent]',
  standalone: true
})
export class ContentDirective {
  constructor (public template: TemplateRef<unknown>) { }
}
