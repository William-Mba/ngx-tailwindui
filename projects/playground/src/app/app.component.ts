import { Component } from '@angular/core';
import { ButtonOptions, IButtonOptions } from 'ngx-tailwindui';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: []
})
export class AppComponent {

  customOptions: IButtonOptions = {
    base: ButtonOptions.base,
    size: ButtonOptions.size,
    rounded: ButtonOptions.rounded,
    variant: {
      filled: {
        theme: {
          bgColor: 'bg-yellow-500',
          modifier: {
            hover: {
              bgColor: 'hover:bg-red-600'
            }
          }
        }
      },
      outlined: {
        border: "", theme: { dark: {}, light: {} }
      }
    }
  }
}