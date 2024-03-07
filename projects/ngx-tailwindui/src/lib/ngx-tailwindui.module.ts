import { NgModule } from '@angular/core';
import { RippleEffect } from './animations/ripple/ripple.directive';
import { ButtonComponent } from './elements/button/button.component';

const directives = [
  RippleEffect
]
const elements = [
  ButtonComponent
]

@NgModule({
  imports: [
    elements,
    directives
  ],
  exports: [
    elements,
    directives
  ]
})
export class NgxTailwindUIModule { }