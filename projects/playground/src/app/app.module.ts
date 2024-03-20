import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ButtonComponent, NgxTailwindUIModule } from 'ngx-tailwindui';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { NavigationComponent } from './components/navigation/navigation.component';

const routes: Routes = []
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    MenuComponent,
    BrowserModule,
    NgxTailwindUIModule,
    NavigationComponent,
    ButtonComponent,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
