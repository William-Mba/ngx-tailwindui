import { NgModule } from '@angular/core';
import { IconDirective } from './shared/directives/icon/icon.directive';
import { RippleDirective } from './shared/directives/ripple/ripple.directive';

const directives = [
  IconDirective,
  RippleDirective
]

const components = [
  // IconComponeent
]

@NgModule({
  imports: [
    ...directives,
    // ...components
  ],
  exports: [
    ...directives,
    // ...components
  ]
})
export class CoreModule { }
