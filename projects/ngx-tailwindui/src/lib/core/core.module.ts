import { NgModule } from '@angular/core';
import { IconDirective } from './shared/directives/icon/icon.directive';

const directives = [
  IconDirective
]

const components = [
  // IconComponeent
]

@NgModule({
  declarations: [
  ],
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
