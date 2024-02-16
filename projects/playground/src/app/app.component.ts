import { Component, inject } from '@angular/core';
import { ThemeService } from './theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: []
})
export class AppComponent {
  alert() {
    alert("Clicked");
  }
  private themeService = inject(ThemeService)

  ngOnInit(): void {
    this.themeService.initializeSettings();
  }
  protected toggleDarkTheme() {
    this.themeService.toggleDarkTheme()
  }
}