import { AfterViewInit, Component, inject } from '@angular/core';
import { ThemeService } from '../theme.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html'
})
export class MenuComponent implements AfterViewInit {
  private themeService = inject(ThemeService)

  ngAfterViewInit(): void {
    this.toggleDarkTheme();
  }

  protected toggleDarkTheme() {
    this.themeService.toggleDarkTheme();
  }

}