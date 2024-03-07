import { Component, OnInit } from '@angular/core';
import { AppButtonOptions } from '@options/app.button.options';
import { ButtonOptions, OptionsManager } from 'ngx-tailwindui';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: []
})
export class AppComponent {
  protected optionsManager = new OptionsManager();

  constructor() {
    this.optionsManager.configure(AppButtonOptions);
  }
}