import { Component, HostListener, Input, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Variant } from "../../core/types/common";
import { Button } from "./button";
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
    this.initialize()
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
}