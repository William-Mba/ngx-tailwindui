import { Component, HostListener, Input, OnInit, inject } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Variant } from "../../core/types/common";
import { Button, IButton } from "./button";
import { DisabledButton, EnabledButton } from "./button-states";
import { Theme } from "../../core/shared/styles/theme";

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

  private theme = inject(Theme)

  constructor () {
    super()
  }

  ngOnInit(): void {

    this.state = this.enabled === true ?
      new EnabledButton(this) : new DisabledButton(this)

    this.buildStyle();
  }


  @HostListener('mouseenter') hover(): void {
    this.state.hover();
  }

  @HostListener('focus') focus(): void {
    this.state.focus();
  }

  @HostListener('click') oclick(): void {
    this.state.click();
  }

  protected setBase() {
    this.addClass(
      this.padding ?? `${this.theme.sizing.width["w-full"]} 
      ${this.theme.spacing.padding["py-1.5"]} 
      ${this.theme.spacing.padding["p-3"]}`,
      this.theme["flex-n-grid"].gap["gap-1.5"],
      this.theme.layout.display["inline-flex"],
      this.theme.typography["text-wrap"]["text-nowrap"],
      this.theme.typography["font-weight"]["font-semibold"],
      this.theme["flex-n-grid"]["justify-content"]["justify-center"],
      this.override === false ? this.className : ''
    )
  }

  protected buildStyle() {
    this.setBase();

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
    if (this.override === true) {
      this.addClass(this.className)
      return;
    }
    this.addClass(
      this.theme.backgrounds["bg-color"]["bg-indigo-600"],
      this.theme.typography["text-color"]["text-neutral-200"],
      this.theme.hover(this.theme.backgrounds["bg-opacity"]["bg-opacity-80"])
    );
  }

  private buildOutlinedVariant() {
    const outline = this.theme.borders["outline-style"].outline
    const outline1 = this.theme.borders["outline-width"]["outline-1"]
    const textNeutral800 = this.theme.typography["text-color"]["text-neutral-800"]

    this.addClass(
      outline,
      outline1,
      textNeutral800,
      'dark:text-neutral-200',
      'dark:outline-neutral-600',
      'dark:outline-opacity-5',
      'hover:outline-neutral-400',
      'hover:outline-opacity-25',
      'dark:hover:outline-neutral-200',
      'dark:hover:outline-opacity-5',
    );
  }

  private buildTextVariant() {
    const border = this.theme.borders["border-width"]["border"]

    this.addClass(
      this.theme.hover(border),
      'text-neutral-800',
      'dark:text-neutral-200',
      'hover:border-neutral-800',
      'hover:border-opacity-25',
      'dark:hover:border-neutral-200',
      'dark:hover:border-opacity-25'
    );
  }
}