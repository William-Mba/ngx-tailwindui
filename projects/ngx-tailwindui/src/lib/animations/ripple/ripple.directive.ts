import { Directive, HostListener, Input } from '@angular/core';
import { concatMap, of, timer } from 'rxjs';
import { ToClassName } from '../../shared/helpers/object.helper';
import { OptionsManager } from '../../options/options-manager';

@Directive({
  selector: '[nxt-ripple]',
  standalone: true
})
export class RippleEffect {

  @Input() disabled: boolean = false;

  @HostListener('click', ['$event']) onClick(event: PointerEvent) {

    if (this.disabled) return;

    const options = OptionsManager.ripple;

    const target = event.target as HTMLElement;

    target.classList.toggle(options.host.overflow, true)
    target.classList.toggle(options.host.position, true)

    const span = document.createElement('span');

    const diameter = Math.max(target.clientWidth, target.clientHeight);
    const radius = diameter / 2;

    span.style.position = 'absolute';
    span.style.width = span.style.height = `${diameter}px`;
    span.style.top = `${event.pageY - (target.offsetTop + radius)}px`;
    span.style.left = `${event.pageX - (target.offsetLeft + radius)}px`;

    span.className = ToClassName(options.element);

    target.appendChild(span);

    timer(500)
      .pipe(concatMap(() => of(span)))
      .subscribe((s) => {
        s.remove();
      })
  }
}