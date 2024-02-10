import { Component, Input } from "@angular/core";
import { CommonModule } from '@angular/common';
import { StyleBuilder } from "../../../shared/builders/style.builder";
import { ArrayO } from "../../../shared/helpers/array.helper";

@Component({
  selector: 'nxt-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styles: []
})

export class ButtonComponent {
  private styleBuilder: StyleBuilder = new StyleBuilder();

  mergedStyle: string[] = [];
  @Input() style: string[] = [];
  @Input() overrideStyle: boolean = false;

  ngOnInit(){
    this.mergedStyle = ArrayO.merge(this.style, this.styleBuilder.Button().style)
  }

  applyStyle(): string[]{
    return this.overrideStyle ? this.style : this.mergedStyle
  }
}
