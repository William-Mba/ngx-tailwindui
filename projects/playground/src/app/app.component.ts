import { Component } from '@angular/core';
import { MyButtonOptions } from '@options/mybutton.options';
import { OptionsManager } from 'ngx-tailwindui';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: []
})
export class AppComponent {

  constructor() {
    OptionsManager.setButton(MyButtonOptions);
  }
}