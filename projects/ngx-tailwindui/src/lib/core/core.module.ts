import { NgModule } from '@angular/core';
import { ButtonComponent } from '../elements/button/button.component';
import { FabDirective } from './shared/fab.directive';
import { ExtendedFabDirective } from './shared/extended-fab.directive';

const components = [
  ButtonComponent,
]

const directives = [
  FabDirective,
  ExtendedFabDirective
]

@NgModule({
  declarations: [
    ...directives
  ],
  imports: [
    ...components
  ],
  exports: [
    ...components,
    ...directives
  ]
})
export class CoreModule { }
