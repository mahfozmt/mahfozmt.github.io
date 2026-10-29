import { Directive, inject, input } from '@angular/core';

import { ClipboardService } from '../services/clipboard.service';

/** Click handler for the "copy email" buttons: copies the address and shows the toast. */
@Directive({
  selector: '[appCopyEmail]',
  host: { '(click)': 'copy()' },
})
export class CopyEmail {
  private readonly clipboard = inject(ClipboardService);

  /** The address to copy. */
  readonly appCopyEmail = input.required<string>();

  protected copy(): void {
    const email = this.appCopyEmail();
    void this.clipboard.copy(email, `Email copied: ${email}`);
  }
}
