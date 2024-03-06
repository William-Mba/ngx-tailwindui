import { Component } from '@angular/core';
import { ButtonOptions } from 'ngx-tailwindui';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: []
})
export class AppComponent {

  customOptions: ButtonOptions = {
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
        border: 'border-8', theme: { dark: {}, light: {} }
      }
    }
  }
}