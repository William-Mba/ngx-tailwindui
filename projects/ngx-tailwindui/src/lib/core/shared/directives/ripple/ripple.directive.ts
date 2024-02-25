import { Directive, HostListener, Input } from '@angular/core';
import { DesignSystem } from '../../../design-system/design-system';
import { concatMap, of, timer } from 'rxjs';

@Directive({
  selector: '[nxt-ripple]',
  standalone: true
})
export class RippleDirective {

  @Input() enabled: boolean = true

  @HostListener('click', ['$event']) onClick(event: PointerEvent) {

    if (!this.enabled) return;

    const ds = DesignSystem;

    const target = event.target as HTMLElement;

    const span = document.createElement('span');

    const diameter = Math.max(target.clientWidth, target.clientHeight);
    const radius = diameter / 2;

    span.style.width = span.style.height = `${diameter}px`;
    span.style.top = `${event.pageY - (target.offsetTop + radius)}px`;
    span.style.left = `${event.pageX - (target.offsetLeft + radius)}px`;

    const position = ds.layout.position.absolute;
    const scale = ds.transforms.scale['scale-50'];
    const display = ds.layout.display['inline-flex'];
    const opacity = ds.effects.opacity['opacity-50'];
    const bgColor = ds.backgrounds['bg-color']['bg-white'];
    const animation = ds.behaviors.animation['animate-ping'];
    const borderRadius = ds.borders['border-radius']['rounded-full'];

    span.classList.add(position, scale, display,
      opacity, bgColor, animation, borderRadius);

    target.appendChild(span);

    timer(600)
      .pipe(concatMap(() => of(span)))
      .subscribe((s) => s.remove())
  }
}