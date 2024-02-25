import { Component, inject } from '@angular/core';
import { ThemeService } from './theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: []
})
export class AppComponent {
  private themeService = inject(ThemeService)
  active = true
  ngOnInit(): void {
    this.themeService.initializeSettings();
  }
  protected toggleDarkTheme() {
    this.themeService.toggleDarkTheme()
  }
}