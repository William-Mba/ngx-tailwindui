import { Directive, HostListener, Input } from '@angular/core';
import { DesignSystem } from '../../../design-system/design-system';
import { concatMap, of, timer } from 'rxjs';

@Directive({
  selector: '[nxt-ripple]',
  standalone: true
})
export class RippleDirective {
  ds = DesignSystem;

  @Input() enabled: boolean = true

  @HostListener('click', ['$event']) onClick(event: PointerEvent) {

    if (!this.enabled) return;

    const target = event.target as HTMLElement;
    
    const targetposition = this.ds.layout.position.relative;
    const overflow = this.ds.layout.overflow["overflow-hidden"];
    target.classList.toggle(overflow, this.enabled)
    target.classList.toggle(targetposition, this.enabled)

    const span = document.createElement('span');

    const diameter = Math.max(target.clientWidth, target.clientHeight);
    const radius = diameter / 2;

    span.style.width = span.style.height = `${diameter}px`;
    span.style.top = `${event.pageY - (target.offsetTop + radius)}px`;
    span.style.left = `${event.pageX - (target.offsetLeft + radius)}px`;

    const position = this.ds.layout.position.absolute;
    const scale = this.ds.transforms.scale['scale-50'];
    const display = this.ds.layout.display['inline-flex'];
    const opacity = this.ds.effects.opacity['opacity-50'];
    const bgColor = this.ds.backgrounds['bg-color']['dark:bg-white'];
    const bgColorDark = this.ds.backgrounds['bg-color']['bg-black'];
    const animation = this.ds.behaviors.animation['animate-ping'];
    const borderRadius = this.ds.borders['border-radius']['rounded-full'];

    span.classList.add(position, scale, display,
      opacity, bgColor, bgColorDark, animation, borderRadius);

    target.appendChild(span);

    timer(600)
      .pipe(concatMap(() => of(span)))
      .subscribe((s) => s.remove())
  }
}