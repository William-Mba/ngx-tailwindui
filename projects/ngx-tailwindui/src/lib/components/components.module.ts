import { NgModule } from '@angular/core';
import { SegmentedButtonComponent } from './segmented-button/segmented-button.component';

const components = [
  SegmentedButtonComponent
]

@NgModule({
  imports: [
    ...components
  ],
  exports: [
    ...components
  ]
})
export class ComponentsModule { }
