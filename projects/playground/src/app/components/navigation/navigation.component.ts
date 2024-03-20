import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuItemComponent } from './menu-item/menu-item.component';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [CommonModule, MenuItemComponent],
  templateUrl: './navigation.component.html',
})
export class NavigationComponent {
  @Input() side: 'left' | 'top' | 'right' | 'bottom' = 'left';

  menuItems: MenuItem[] = [
    {
      textContent: 'Getting started',
      child: [
        {
          textContent: 'Installation',
          route: 'installation'
        },
        {
          textContent: 'What Is Tailwind CSS',
          route: 'what-is-tailwindcss'
        },
      ]
    },
    {
      textContent: 'Menu item 3',
      child: [
        {
          textContent: 'Level 1 Chid 1',
          child: [
            {
              textContent: 'Level 2 Chid 1'
            },
            {
              textContent: 'Level 2 Chid 2'
            },
          ]
        },
        {
          textContent: 'Level 1 Chid 2',
          child: [
            {
              textContent: 'Level 2 Chid 1'
            },
            {
              textContent: 'Level 2 Chid 2'
            },
          ]
        },
      ]
    },
    {
      textContent: 'Menu item 4',
      child: [
        {
          textContent: 'Level 1 Chid 1',
          child: [
            {
              textContent: 'Level 2 Chid 1',
              child: [
                {
                  textContent: 'Level 3 Chid 1'
                },
                {
                  textContent: 'Level 3 Chid 2'
                },
              ]
            },
            {
              textContent: 'Level 2 Chid 2',
              child: [
                {
                  textContent: 'Level 3 Chid 1'
                },
                {
                  textContent: 'Level 3 Chid 2'
                },
              ]
            },
          ]
        },
        {
          textContent: 'Level 1 Chid 2',
          child: [
            {
              textContent: 'Level 2 Chid 1',
              child: [
                {
                  textContent: 'Level 3 Chid 1'
                },
                {
                  textContent: 'Level 3 Chid 2'
                },
              ]
            },
            {
              textContent: 'Level 2 Chid 2',
              child: [
                {
                  textContent: 'Level 3 Chid 1'
                },
                {
                  textContent: 'Level 3 Chid 2',
                  child: [
                    {
                      textContent: 'Level 4 Chid 1',
                      child: [
                        {
                          textContent: 'Level 5 Chid 1'
                        },
                        {
                          textContent: 'Level 5 Chid 2'
                        },
                      ]
                    },
                    {
                      textContent: 'Level 4 Chid 2',
                      child: [
                        {
                          textContent: 'Level 5 Chid 1'
                        },
                        {
                          textContent: 'Level 5 Chid 2',
                          child: [
                            {
                              textContent: 'Level 6 Chid 1',
                              child: [
                                {
                                  textContent: 'Level 7 Chid 1'
                                },
                                {
                                  textContent: 'Level 7 Chid 2'
                                },
                              ]
                            },
                            {
                              textContent: 'Level 6 Chid 2',
                              child: [
                                {
                                  textContent: 'Level 7 Chid 1'
                                },
                                {
                                  textContent: 'Level 7 Chid 2'
                                },
                              ]
                            },
                          ]
                        },
                      ]
                    },
                  ]
                },
              ]
            },
          ]
        },
      ]
    }
  ]
}

export type MenuItem = {
  textContent: string,
  route?: string,
  child?: MenuItem[]
}