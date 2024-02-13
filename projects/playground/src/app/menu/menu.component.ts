import { Component, inject } from '@angular/core';
import { ThemeService } from '../theme.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html'
})
export class MenuComponent {
  private themeService = inject(ThemeService)

  protected toggleDarkTheme() {
    this.themeService.toggleDarkTheme();
  }

}