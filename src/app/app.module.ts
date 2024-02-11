import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgxTailwindUiModule } from 'ngx-tailwindui';
import { RouterModule, Routes } from '@angular/router';
import { ContentDirective } from 'projects/ngx-tailwindui/src/lib/core/shared/content.directive';

const routes: Routes = []
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgxTailwindUiModule,
    ContentDirective,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
