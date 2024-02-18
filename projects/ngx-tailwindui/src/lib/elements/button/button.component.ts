import { Component, Input, OnInit, TemplateRef } from "@angular/core";
import { CommonModule, NgTemplateOutlet } from "@angular/common";
import { Button } from "../../core/interfaces/button";
import { ClassName, Variant } from "../../core/types/common";
import { FontSize } from "../../core/types/typography/font-size";
import { Shadow } from "../../core/types/effects/box-shadow";
import { BgColor } from "../../core/types/backgrounds/background-color";
import { TextColor } from "../../core/types/typography/text-color";
import { FontWeight } from "../../core/types/typography/font-weight";
import { BorderColor } from "../../core/types/borders/border-color";
import { BorderRadius } from "../../core/types/borders/border-radius";
import { OutlineColor } from "../../core/types/borders/outline-color";

@Component({
  selector: "nxt-button",
  standalone: true,
  imports: [
    CommonModule,
    NgTemplateOutlet
  ],
  templateUrl: "./button.component.html"
})
export class ButtonComponent<T extends Button> implements OnInit, Button {
  @Input() textContent!: string
  @Input() className!: ClassName
  @Input() variant: Variant = "filled"
  @Input() borderRadius: BorderRadius = "rounded-md"
  @Input() fontSize: FontSize = "text-base"
  @Input() shadow: Shadow = "shadow-none"
  @Input() bgColor: BgColor = "bg-green-800"
  @Input() textColor: TextColor = "text-neutral-100"
  @Input() fontWeight: FontWeight = "font-semibold"
  @Input() borderColor: BorderColor = "border-neutral-800"
  @Input() outlineColor!: OutlineColor

  @Input() customButtonRef!: TemplateRef<T>;

  protected style!: ClassName

  ngOnInit(): void {

    if (this.variant === 'outlined') {
      // this.outlineColor = "outline-neutral-800"
    }
    
    this.BuildStyle();
  }

  protected setColors() {
    if (this.variant === "text" ||
      this.variant === "outlined") {
      this.bgColor = "bg-transparent";
      this.textColor = "text-neutral-800";
      this.addClass("dark:text-neutral-200")
    }
    if (this.variant === 'outlined') {
      
    }
  }

  protected getBase(extra?: string) {
    return `
      inline-flex justify-center 
      px-5 py-2.5 text-nowrap gap-2
      ${this.shadow} ${this.borderRadius} 
      ${this.fontSize} ${this.fontWeight}
      ${this.bgColor} ${this.textColor} ${extra ?? ""}
    `
  }

  protected BuildStyle() {

    this.setColors();

    switch (this.variant) {
      case "text": this.addClass(this.getBase())
        break;
      case "filled": this.addClass(this.getBase())
        break;
      case "outlined": this.addClass(this.getBase(`outline outline-1 ${this.outlineColor}`))
        break;
    }

    if (this.className) {
      this.addClass(this.className)
    }
  }

  private addClass(...arg: string[]) {
    arg.forEach(c => this.style += ` ${c} `)
  }
}