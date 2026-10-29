import { Injectable, signal } from '@angular/core';

export const TOAST_DURATION_MS = 3200;

/** Drives the small "copied" notification shown in the bottom-right corner. */
@Injectable({ providedIn: 'root' })
export class ToastService {
  readonly message = signal('Email copied to clipboard!');
  readonly visible = signal(false);

  private hideTimer: ReturnType<typeof setTimeout> | undefined;

  show(message: string): void {
    this.message.set(message);
    this.visible.set(true);
    clearTimeout(this.hideTimer);
    this.hideTimer = setTimeout(() => this.visible.set(false), TOAST_DURATION_MS);
  }
}
