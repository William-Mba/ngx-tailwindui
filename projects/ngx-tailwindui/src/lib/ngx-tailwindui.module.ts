import { NgModule } from '@angular/core';
import { CoreModule } from "./core/core.module";
import { ComponentsModule } from './components/components.module';

const modules = [
  CoreModule,
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