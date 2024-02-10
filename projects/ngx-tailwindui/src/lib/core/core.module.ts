import { NgModule } from '@angular/core';
import { ButtonComponent } from './elements/button/button.component';

const components = [
  ButtonComponent
]

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
