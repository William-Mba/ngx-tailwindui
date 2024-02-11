import { Directive, TemplateRef } from '@angular/core';

@Directive({
  selector: '[nxt-extended-fab]'
})
export class ExtendedFabDirective {
  constructor (public content: TemplateRef<any>) { }
}
