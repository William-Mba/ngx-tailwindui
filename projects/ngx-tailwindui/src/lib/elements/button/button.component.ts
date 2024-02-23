import { Component, HostListener, Input, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Variant } from "../../core/types/common";
import { Button, IButton } from "./button";
import { DisabledButton, EnabledButton } from "./states";

@Component({
  selector: "nxt-button",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./button.component.html"
})
export class ButtonComponent extends Button implements OnInit, IButton {

  @Input() override enabled: boolean = true;
  @Input() override override: boolean = false;
  @Input() override variant: Variant = "filled";
  @Input() override className: string = '';

  private gap = this.ds["flex-n-grid"].gap["gap-1.5"];
  private display = this.ds.layout.display["inline-flex"];
  private textWrap = this.ds.typography["text-wrap"]["text-nowrap"];
  private fontWeight = this.ds.typography["font-weight"]["font-semibold"];
  private justifyContent = this.ds["flex-n-grid"]["justify-content"]["justify-center"];
  private textColor!: string;
  private textColorDark!: string;

  constructor () {
    super()
  }

  ngOnInit(): void {
    this.buildStyle();
    this.state = this.enabled ? new EnabledButton(this) : new DisabledButton(this)
  }

  @HostListener('mouseenter') override hover(): void {
    this.state.hover();
  }

  @HostListener('dblclick') override focus(): void {
    this.state.focus();
  }

  @HostListener('click') override click(): void {
    this.state.click();
  }

  protected setBase() {
    if (this.override) {
      this.addClass(this.className)
      return;
    }
    else {
      if (this.padding) {
        this.addClass(this.padding)
      }
      else {
        this.addClass(
          this.ds.spacing.padding["p-3"],
          this.ds.spacing.padding["py-1.5"]
        )
      }
      if (this.width) {
        this.addClass(this.width)
      }
      else {
        this.addClass(
          this.ds.sizing.width["w-full"]
        )
      }
      if (this.margin) {
        this.addClass(this.margin)
      }


      this.addClass(
        this.gap,
        this.display,
        this.textWrap,
        this.fontWeight,
        this.justifyContent,
      )
    }
  }

  protected buildStyle() {
    this.setBase();

    if (!this.override) {
      switch (this.variant) {
        case "text": this.buildTextVariant()
          break;
        case "filled": this.buildFilledVariant()
          break;
        case "outlined": this.buildOutlinedVariant()
          break;
      }
    }
  }

  private buildFilledVariant() {
    const bgColor = this.ds.backgrounds["bg-color"]["bg-indigo-600"]
    this.textColor = this.ds.typography["text-color"]["text-neutral-200"]

    this.addClass(bgColor, this.textColor);
  }

  private buildOutlinedVariant() {
    const outlineStyle = this.ds.borders["outline-style"].outline
    const outlineWidth = this.ds.borders["outline-width"]["outline-1"]
    const outlineColorDark = `dark:${this.ds.borders["outline-color"]['outline-neutral-600']}` as const
    this.textColor = this.ds.typography["text-color"]["text-neutral-800"]
    this.textColorDark = `dark:${this.ds.typography["text-color"]["text-neutral-200"]}`

    this.addClass(
      outlineStyle,
      outlineWidth,
      outlineColorDark,
      this.textColor,
      this.textColorDark,
    );
  }

  private buildTextVariant() {
    const borderHover = this.ds.borders["border-width"]["hover:border"]
    const textColor = this.ds.typography["text-color"]["text-neutral-800"]
    const textColorDark = this.ds.typography["text-color"]["dark:text-neutral-200"]
    const borderColorHover = this.ds.borders["border-color"]["hover:border-neutral-800"]
    const borderOpacityHover = this.ds.borders["border-opacity"]["hover:border-opacity-25"]
    const borderColorDarkHover = this.ds.borders["border-color"]["dark:hover:border-neutral-700"]
    
    this.addClass(
      textColor,
      borderHover,
      textColorDark,
      borderColorHover,
      borderOpacityHover,
      borderColorDarkHover
    );
  }
}