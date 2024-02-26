import { Component, HostListener, Input, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Variant } from "../../core/types/common";
import { Button } from "./button";
import { DisabledButton, EnabledButton } from "./button.states";
import { Padding } from "../../core/types/spacing/padding";
import { Width } from "../../core/types/sizing/width";
import { Margin } from "../../core/types/spacing/margin";

@Component({
  selector: "nxt-button",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./button.component.html"
})
export class ButtonComponent extends Button implements OnInit {

  @Input() override enabled: boolean = true;
  @Input() override override: boolean = false;
  @Input() override variant: Variant = "filled";
  @Input() override className: string = '';
  @Input() override padding!: Padding;
  @Input() override margin!: Margin;
  @Input() override width!: Width;

  constructor() {
    super()
  }

  ngOnInit(): void {
    this.buildStyle();
    this.setState(this.enabled ? new EnabledButton(this) : new DisabledButton(this))
  }

  @HostListener('mouseenter') onmouseenter(): void {
    this.state.hover();
  }

  @HostListener('mousedown') onmousedown(): void {
    this.state.press();
  }

  @HostListener('mouseup') onmouseup(): void {
    this.state.focus();
  }

  protected setBase() {

    if (this.override) {
      this.addClass(this.className);
      return;
    }
    else {
      if (this.padding) {
        this.addClass(this.padding);
      }
      else {
        this.addClass(
          this.ds.spacing.padding["p-3"],
          this.ds.spacing.padding["py-1.5"]
        );
      }
      if (this.width) {
        this.addClass(this.width);
      }
      else {
        this.addClass(
          this.ds.sizing.width["w-full"]
        );
      }
      if (this.margin) {
        this.addClass(this.margin);
      }

      const gap = this.ds["flex-n-grid"].gap["gap-1.5"];
      const display = this.ds.layout.display["inline-flex"];
      const position = this.ds.layout.position.relative;
      const overflow = this.ds.layout.overflow["overflow-hidden"]
      const textWrap = this.ds.typography["text-wrap"]["text-nowrap"];
      const fontWeight = this.ds.typography["font-weight"]["font-semibold"];
      const justifyContent = this.ds["flex-n-grid"]["justify-content"]["justify-center"];

      this.addClass(
        gap,
        display,
        textWrap,
        position,
        overflow,
        fontWeight,
        justifyContent,
      );
    }

    this.addClass(this.className)
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
    const bgColor = this.ds.backgrounds["bg-color"]["bg-indigo-800"]
    const textColor = this.ds.typography["text-color"]["text-neutral-200"]

    this.addClass(bgColor, textColor);
  }

  private buildOutlinedVariant() {
    const outlineStyle = this.ds.borders["outline-style"].outline
    const outlineWidth = this.ds.borders["outline-width"]["outline-1"]
    const outlineColor = this.ds.borders["outline-color"]['outline-neutral-400']
    const outlineColorDark = this.ds.borders["outline-color"]['dark:outline-neutral-600']
    const textColor = this.ds.typography["text-color"]["text-neutral-800"]
    const textColorDark = this.ds.typography["text-color"]["dark:text-neutral-200"]

    this.addClass(
      outlineStyle,
      outlineWidth,
      outlineColor,
      outlineColorDark,
      textColor,
      textColorDark,
    );
  }

  private buildTextVariant() {
    const textColor = this.ds.typography["text-color"]["text-neutral-800"]
    const textColorDark = this.ds.typography["text-color"]["dark:text-neutral-200"]

    this.addClass(
      textColor,
      textColorDark,
    );
  }
}