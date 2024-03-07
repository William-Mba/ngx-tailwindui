import { Component, Input, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Button } from "./button";
import { ButtonOptions, ButtonVariant } from "../../options/button.options";
import { Size } from "../../options/shared/size.options";

@Component({
  selector: "nxt-button",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./button.component.html"
})
export class ButtonComponent extends Button implements OnInit {

  @Input() override size: Size = 'sm';
  @Input() override className: string = '';
  @Input() override variant: ButtonVariant = "filled";
  @Input() override options!: ButtonOptions;

  ngOnInit(): void {
    this.setup();
  }
}