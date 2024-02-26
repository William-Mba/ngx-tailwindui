import { IButton } from "../../elements/button/button";
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Variant } from '../../core/types/common';
import { Padding } from "../../core/types/spacing/padding";
import { Margin } from "../../core/types/spacing/margin";
import { Width } from "../../core/types/sizing/width";
import { Height } from "../../core/types/sizing/height";

@Component({
  selector: 'nxt-segmented-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './segmented-button.component.html'
})
export class SegmentedButtonComponent {

}

export interface ISegmentedButton {
  width: Width,
  height: Height,
  padding: Padding,
  margin: Margin,
  variant: Variant,
  segment: 2 | 3 | 4 | 5,
  items: IButton[]
}