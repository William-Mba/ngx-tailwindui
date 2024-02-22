import { IButton } from "../../elements/button/button";
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Variant } from '../../core/types/common';

@Component({
  selector: 'nxt-segmented-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './segmented-button.component.html'
})
export class SegmentedButtonComponent {

}

export interface SegmentedButton {
  width: string,
  height: string,
  variant: Variant
  padding: string,
  items: IButton[]
}