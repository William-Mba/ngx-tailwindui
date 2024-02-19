import { NgModule } from '@angular/core';
import { ElementsModule } from './elements/elements.module';
import { ComponentsModule } from './components/components.module';
import { CoreModule } from './core/core.module';

const modules = [
  CoreModule,
  ElementsModule,
  ComponentsModule
]

@NgModule({
  declarations: [],
  imports: [
    ...modules
  ],
  exports: [
    ...modules
  ]
})
export class NgxTailwindUiModule { }