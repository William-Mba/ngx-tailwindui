import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ButtonComponent, NgxTailwindUiModule } from 'ngx-tailwindui';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { IconDirective } from 'projects/ngx-tailwindui/src/lib/core/directives/icon/icon.directive';

const routes: Routes = []
@NgModule({
  declarations: [
    AppComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    IconDirective,
    ButtonComponent,
    NgxTailwindUiModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
