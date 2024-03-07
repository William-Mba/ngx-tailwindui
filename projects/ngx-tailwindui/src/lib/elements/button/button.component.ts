import { Component, Input, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Button } from "./button";
import { ButtonVariant } from "../../options/button.options";
import { Size } from "../../options/shared/size.options";

@Component({
  selector: "nxt-button",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./button.component.html"
})
export class ButtonComponent extends Button implements OnInit {

  @Input() title: string = '';
  @Input() type: "submit" | "reset" | "button" = 'button';
  @Input() override size: Size = 'sm';
  @Input() override className!: string;
  @Input() override disabled!: boolean;
  @Input() override variant: ButtonVariant = "filled";

  ngOnInit(): void {
    this.setup();
  }
}