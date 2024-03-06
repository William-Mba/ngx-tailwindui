import { Directive, HostListener, Input } from '@angular/core';
import { concatMap, of, timer } from 'rxjs';
import { RippleOptions } from '../../options/animations/ripple.options';
import { ToClassName } from '../../core/helpers/string.helper';

@Directive({
  selector: '[nxt-ripple]',
  standalone: true
})
export class RippleEffect {
  private options = RippleOptions;
  @Input() disabled: boolean = false;

  @HostListener('click', ['$event']) onClick(event: PointerEvent) {

    if (this.disabled) return;

    const target = event.target as HTMLElement;

    target.classList.toggle(this.options.host.overflow, true)
    target.classList.toggle(this.options.host.position, true)

    const span = document.createElement('span');

    const diameter = Math.max(target.clientWidth, target.clientHeight);
    const radius = diameter / 2;

    span.style.position = 'absolute';
    span.style.width = span.style.height = `${diameter}px`;
    span.style.top = `${event.pageY - (target.offsetTop + radius)}px`;
    span.style.left = `${event.pageX - (target.offsetLeft + radius)}px`;

    span.className = ToClassName(this.options.element);

    target.appendChild(span);

    timer(500)
      .pipe(concatMap(() => of(span)))
      .subscribe((s) => {
        s.remove();
      })
  }
}