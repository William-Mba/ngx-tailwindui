import { Component } from '@angular/core';
import { MyButtonConfig } from '@options/mybutton.config';
import { ConfigurationManager } from 'ngx-tailwindui';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: []
})
export class AppComponent {

  constructor() {
    // set my custom config
    // ConfigurationManager.setButton(MyButtonConfig);
  }
}