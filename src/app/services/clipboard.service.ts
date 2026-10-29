import { DOCUMENT } from '@angular/common';
import { Injectable, inject } from '@angular/core';

import { ToastService } from './toast.service';

/** Copies text to the clipboard and tells the visitor how it went. */
@Injectable({ providedIn: 'root' })
export class ClipboardService {
  private readonly document = inject(DOCUMENT);
  private readonly toast = inject(ToastService);

  async copy(text: string, successMessage: string): Promise<void> {
    const clipboard = this.document.defaultView?.navigator.clipboard;
    if (clipboard?.writeText) {
      try {
        await clipboard.writeText(text);
        this.toast.show(successMessage);
        return;
      } catch {
        // Permission denied or insecure context: fall through to the legacy path.
      }
    }
    this.fallbackCopy(text, successMessage);
  }

  /** Legacy path for browsers without the async Clipboard API. */
  private fallbackCopy(text: string, successMessage: string): void {
    const textArea = this.document.createElement('textarea');
    textArea.value = text;
    textArea.style.position = 'fixed';
    textArea.style.left = '-9999px';
    this.document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    let copied = false;
    try {
      copied = this.document.execCommand('copy');
    } catch {
      copied = false;
    }
    this.document.body.removeChild(textArea);
    this.toast.show(copied ? successMessage : `Failed to copy. Please copy manually: ${text}`);
  }
}
