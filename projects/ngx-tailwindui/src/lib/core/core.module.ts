import { NgModule } from '@angular/core';
import { ButtonComponent } from '../elements/button/button.component';

const components = [
  ButtonComponent,
]

const directives = []

@NgModule({
  declarations: [],
  imports: [
    ...components
  ],
  exports: [
    ...components
  ]
})
export class CoreModule { }
