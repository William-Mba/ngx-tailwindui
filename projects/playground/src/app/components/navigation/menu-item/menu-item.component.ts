import { Component, Input, OnInit, TemplateRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuItem } from '../navigation.component';
import { ButtonComponent } from 'ngx-tailwindui';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-menu-item',
  standalone: true,
  imports: [CommonModule, ButtonComponent, RouterModule],
  template: `
    <details [open]="open" (toggle)="toggleOpen()" class="cursor-pointer select-none font-semibold">
      <ng-container *ngIf="item.textContent">
        <summary class="list-none relative p-2 focus:underline underline-offset-4 decoration-dotted">
          <span *ngIf="!hasChild(item)" [routerLink]="item.route">
            {{item.textContent}}
          </span>
          <span *ngIf="hasChild(item)">
            {{item.textContent}}
            <ng-container *ngIf="hasChild(item)">
              <span class="absolute right-0">
                <ng-container *ngIf="open" [ngTemplateOutlet]="onOpenICon || chevronUp"></ng-container>
                <ng-container *ngIf="!open" [ngTemplateOutlet]="onCloseICon || chevronDown"></ng-container>
              </span>
            </ng-container>
          </span>
        </summary>
        <ng-container *ngIf="hasChild(item)">
          <app-menu-item *ngFor="let child of item.child" [item]="child"></app-menu-item>
        </ng-container>
      </ng-container>
    </details>

    <ng-template #chevronDown>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5">
        <path fill-rule="evenodd" d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" />
      </svg>
    </ng-template>
    <ng-template #chevronUp>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5">
        <path fill-rule="evenodd" d="M9.47 6.47a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 1 1-1.06 1.06L10 8.06l-3.72 3.72a.75.75 0 0 1-1.06-1.06l4.25-4.25Z" clip-rule="evenodd" />
      </svg>
    </ng-template>
  `
})
export class MenuItemComponent {
  @Input() item!: MenuItem;
  @Input() open!: boolean;
  @Input() onOpenICon!: TemplateRef<any>;
  @Input() onCloseICon!: TemplateRef<any>;

  toggleOpen() {
    this.open = !this.open;
  }

  hasChild(item: MenuItem): boolean {
    return !!(item.child?.length && item.child?.length! > 0);
  }
}
