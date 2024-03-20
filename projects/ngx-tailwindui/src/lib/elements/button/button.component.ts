import { Component, Input, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Button } from "./button";
import { ButtonType } from "./button.type";
import { SizeType } from "../../config/shared/size.config";
import { ButtonVariant } from "../../config/elements/button.config";

@Component({
  selector: "nxt-button",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./button.component.html"
})
export class ButtonComponent extends Button implements OnInit {

  @Input() title: string = '';
  @Input() type: ButtonType = 'button';
  @Input() override size: SizeType = 'sm';
  @Input() override className!: string;
  @Input() override disabled!: boolean;
  @Input() override variant: ButtonVariant = "filled";

  ngOnInit(): void {
    this.init();
  }
}