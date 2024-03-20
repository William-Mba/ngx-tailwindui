import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InstallationComponent } from './installation/installation.component';
import { RouterModule } from '@angular/router';

const components = [
  InstallationComponent
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ...components,
    RouterModule.
  ],
  exports: [
    ...components
  ]
})
export class GettingStartedModule { }
