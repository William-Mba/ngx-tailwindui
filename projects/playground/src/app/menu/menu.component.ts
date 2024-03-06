import { AfterViewInit, Component, inject } from '@angular/core';
import { ThemeService } from '../theme.service';
import { ButtonComponent, RippleEffect } from 'ngx-tailwindui';

@Component({
  standalone: true,
  imports: [RippleEffect, ButtonComponent],
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