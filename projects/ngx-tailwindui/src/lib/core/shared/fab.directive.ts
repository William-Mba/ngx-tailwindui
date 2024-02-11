import { Directive, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[nxt-fab]'
})
export class FabDirective {

  constructor (public content: TemplateRef<any>) { }
}
