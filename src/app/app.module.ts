import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgxTailwindUiModule } from 'ngx-tailwindui';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgxTailwindUiModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
