import { Component, ContentChild, Input, OnInit, TemplateRef } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Button } from "../../core/interfaces/button";
import { IconDirective } from "../../core/directives/icon/icon.directive";
import { Style, Variant } from "../../core/types/common";
import { Radius } from "../../core/types/borders/border-radius";
import { FontSize } from "../../core/types/typography/font-size";
import { Shadow } from "../../core/types/effects/box-shadow";
import { BgColor } from "../../core/types/backgrounds/background-color";
import { TextColor } from "../../core/types/typography/text-color";
import { FontWeight } from "../../core/types/typography/font-weight";
import { BorderColor } from "../../core/types/borders/border-color";

@Component({
  selector: "nxt-button",
  standalone: true,
  imports: [CommonModule, IconDirective],
  templateUrl: "./button.component.html"
})
export class ButtonComponent implements OnInit, Button {
  @Input() variant: Variant = "filled"
  @Input() radius: Radius = "rounded-md"
  @Input() fontSize: FontSize = "text-xs"
  @Input() shadow: Shadow = "shadow-none"
  @Input() bgColor: BgColor = "bg-green-800"
  @Input() textColor: TextColor = "text-green-100"
  @Input() fontWeight: FontWeight = "font-semibold"
  @Input() borderColor: BorderColor = "border-emerald-800"

  @Input() extraStyle!: Style
  @Input() customButtonRef!: TemplateRef<unknown>;

  @ContentChild(IconDirective) iconRef!: IconDirective;

  protected style: Style = new Array()

  ngOnInit(): void {
    this.BuildStyle();
  }

  protected setColors() {
    if (this.variant === "outlined"
      || this.variant === "text") {
      this.bgColor = "bg-transparent";
      this.textColor = "text-emerald-800";
      this.style.push("dark:text-emerald-200")
    }
  }

  protected getBaseStyle(extra?: string) {
    return `inline-flex gap-1 px-2 py-1.5 text-nowrap 
      ${this.shadow} ${this.fontSize} ${this.fontWeight}
      ${this.radius} ${this.bgColor} ${this.textColor} ${extra ?? ""}`
  }

  protected BuildStyle() {

    this.setColors();

    switch (this.variant) {
      case "text": this.style.push(this.getBaseStyle())
        break;
      case "filled": this.style.push(this.getBaseStyle())
        break;
      case "outlined": this.style.push(this.getBaseStyle(`border ${this.borderColor}`))
        break;
    }

    if (this.extraStyle) {
      this.style.push(...this.extraStyle)
    }
  }
}