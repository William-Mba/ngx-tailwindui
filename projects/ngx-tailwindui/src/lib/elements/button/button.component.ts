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
  
  @Input() variant: Variant = "filled";
  @Input() textContent!: string;
  @Input() className!: ClassName;
  @Input() borderRadius!: BorderRadius;
  @Input() fontSize!: FontSize;
  @Input() shadow!: Shadow;
  @Input() bgColor!: BgColor;
  @Input() padding!: string;
  @Input() textColor!: TextColor;
  @Input() fontWeight!: FontWeight;
  @Input() borderColor!: BorderColor;
  @Input() outlineColor!: OutlineColor;

  @Input() customButtonRef!: TemplateRef<T>;

  protected style!: ClassName

  ngOnInit(): void {
    this.setStyle();
  }

  protected getBase(extra?: string) {
    return `
      inline-flex justify-center gap-1 ${this.padding ?? 'px-6 p-1.5'} text-nowrap
      ${this.fontSize ?? "text-sm"} ${this.fontWeight ?? "font-semibold"}
      ${this.textColor} ${this.shadow ?? "shadow-none"} ${extra ?? ""}
    `
  }

  protected setStyle() {

    switch (this.variant) {
      case "text": this.buildTextVariant()
        break;
      case "filled": this.buildFilledVariant()
        break;
      case "outlined": this.buildOutlinedVariant()
        break;
    }
  }

  private buildFilledVariant() {
    if (!this.textColor) {
      this.textColor = "text-neutral-200";
    }
    this.borderRadius = this.borderRadius ?? "rounded-none";
    this.addClass(this.borderRadius);

    this.shadow = this.shadow ?? "shadow-none";
    this.addClass(this.shadow);

    this.bgColor = this.bgColor ?? "bg-indigo-600";
    this.addClass(this.bgColor);

    if (this.borderColor) {
      this.addClass(`border border-1 ${this.borderColor}`);
    }
    this.addClass(this.getBase(this.className));
  }

  private buildOutlinedVariant() {
    if (!this.textColor) {
      this.textColor = "text-neutral-800";
      this.addClass("dark:text-neutral-200");
    }
    if(!this.outlineColor){
      this.outlineColor = "outline-neutral-800"
      this.addClass("dark:outline-neutral-200")
    }
    this.addClass("outline outline-1")
    this.addClass(this.outlineColor);

    this.borderRadius = this.borderRadius ?? "rounded-none"
    this.addClass(this.borderRadius);
    
    this.addClass(this.getBase(this.className))
  }

  private buildTextVariant() {
    if (!this.textColor) {
      this.textColor = "text-neutral-800";
      this.addClass("dark:text-neutral-200");
    }
    this.addClass(this.getBase(this.className))
  }

  private addClass(...arg: string[]) {
    arg.forEach(c => this.style += ` ${c} `)
  }
}