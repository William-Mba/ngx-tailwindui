import { Component, Input, OnInit, mergeApplicationConfig } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Shape, Size, Variant } from "../../core/types/common";
import { Button } from "./button";
import { ButtonOptions, IButtonOptions } from "../../options/elements/button.options";

@Component({
  selector: "nxt-button",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./button.component.html"
})
export class ButtonComponent extends Button implements OnInit {

  @Input() override size: Size = 'sm';
  @Input() override rounded: Shape = 'md';
  @Input() override className: string = '';
  @Input() override variant: Variant = "filled";
  @Input() override options: IButtonOptions = ButtonOptions;

  ngOnInit(): void {
    this.setup();
  }
}