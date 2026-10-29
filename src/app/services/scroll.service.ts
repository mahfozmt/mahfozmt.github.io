import { DOCUMENT } from '@angular/common';
import { DestroyRef, Injectable, inject, signal } from '@angular/core';

/** Exposes the window scroll position as a signal and offers in-page scrolling helpers. */
@Injectable({ providedIn: 'root' })
export class ScrollService {
  private readonly document = inject(DOCUMENT);

  readonly scrollY = signal(0);

  constructor() {
    const view = this.document.defaultView;
    if (!view) {
      return;
    }
    const update = () => this.scrollY.set(view.scrollY);
    update();
    view.addEventListener('scroll', update, { passive: true });
    inject(DestroyRef).onDestroy(() => view.removeEventListener('scroll', update));
  }

  /**
   * Scrolls the element with the given id into view. With `auto` the stylesheet's
   * `scroll-behavior: smooth` decides. Returns false when there is no such element.
   */
  scrollToId(id: string, behavior: ScrollBehavior = 'auto'): boolean {
    const target = this.document.getElementById(id);
    target?.scrollIntoView({ behavior });
    return target !== null;
  }

  scrollToTop(): void {
    this.document.defaultView?.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
