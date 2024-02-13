import { Component, Input, TemplateRef } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ButtonVariant, RoundedVariant } from "../../core/shared/variants.style";

@Component({
  selector: "nxt-button",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./button.component.html"
})
export class ButtonComponent {
  protected btnV = ButtonVariant;
  protected roundedV = RoundedVariant;

  @Input() customStyle!: string | string[] | Set<string>;
  @Input() variant: VariantBtn = this.btnV.fab;
  @Input() rounded: Rounded = this.roundedV.full;
  @Input() customTemplate!: TemplateRef<any>;
}
export type Rounded = 'none' | 'sm' | 'md' | 'lg' | 'full'
export type VariantBtn = 'elevated' | 'filled' | 'filled-tonal'
  | 'outlined' | 'text' | 'icon' | 'segmented' | 'fab' | 'extended-fab'