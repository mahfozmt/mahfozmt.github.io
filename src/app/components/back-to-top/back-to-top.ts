import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';

import { ScrollService } from '../../services/scroll.service';

/** Distance in pixels after which the floating button appears. */
export const BACK_TO_TOP_THRESHOLD = 400;

@Component({
  selector: 'app-back-to-top',
  templateUrl: './back-to-top.html',
  styleUrl: './back-to-top.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BackToTop {
  protected readonly scroll = inject(ScrollService);
  protected readonly visible = computed(() => this.scroll.scrollY() > BACK_TO_TOP_THRESHOLD);
}
