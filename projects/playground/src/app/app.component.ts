import { Component, inject } from '@angular/core';
import { ThemeService } from './theme.service';
import { Theme } from 'ngx-tailwindui';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: []
})
export class AppComponent {
  private themeService = inject(ThemeService)
  protected bgColor = inject(Theme).backgrounds['bg-color']['bg-green-600']

  ngOnInit(): void {
    this.themeService.initializeSettings();
  }
  protected toggleDarkTheme() {
    this.themeService.toggleDarkTheme()
  }
}