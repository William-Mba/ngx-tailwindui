import { NgModule } from '@angular/core';
import { ButtonComponent } from './button/button.component';

const elements = [
  ButtonComponent
]

@NgModule({
  imports: [
    ...elements
  ],
  exports: [
    ...elements
  ]
})
export class ElementsModule { }
