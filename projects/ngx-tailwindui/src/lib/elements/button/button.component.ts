import { Component, ContentChild, Injector, Input, TemplateRef, inject } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Router } from "@angular/router";
import { ContentDirective } from "../../core/shared/content.directive";
import { ButtonVariant, RoundedVariant } from "../../core/shared/variants.style";

@Component({
  selector: "nxt-button",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./button.component.html",
  providers: [
    Router
  ]
})
export class ButtonComponent {
  protected btnV = ButtonVariant;
  protected roundedV = RoundedVariant;
  protected injector = inject(Injector);
  protected router = inject(Router, { self: true });

  @Input() customStyle!: string | string[] | Set<string>;
  @Input() variant: VariantBtn = this.btnV.fab;
  @Input() rounded: Rounded = this.roundedV.full;
  @Input() customTemplate!: TemplateRef<any>;

  @ContentChild(ContentDirective) contentChild!: ContentDirective;

  navigateTo(url: string) {
    this.router.navigateByUrl(url);
  }
}
export type Rounded = 'none' | 'sm' | 'md' | 'lg' | 'full'
export type VariantBtn = 'elevated' | 'filled' | 'filled-tonal'
  | 'outlined' | 'text' | 'icon' | 'segmented' | 'fab' | 'extended-fab'