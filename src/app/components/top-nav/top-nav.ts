import { DOCUMENT } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  effect,
  inject,
  signal,
  untracked,
} from '@angular/core';

import { BRAND, NAV_LINKS } from '../../data/navigation.data';
import { PROFILE } from '../../data/profile.data';
import { ScrollService } from '../../services/scroll.service';
import { ThemeService } from '../../services/theme.service';

/** Offset in pixels used when working out which section is currently in view. */
const SPY_OFFSET = 100;

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.html',
  styleUrl: './top-nav.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TopNav {
  private readonly document = inject(DOCUMENT);
  private readonly scroll = inject(ScrollService);
  protected readonly themeService = inject(ThemeService);

  protected readonly profile = PROFILE;
  protected readonly brand = BRAND;
  protected readonly links = NAV_LINKS;

  /** Whether the mobile drawer is open. */
  readonly menuOpen = signal(false);
  /** Id of the section the visitor is currently reading, used to highlight its link. */
  readonly activeSection = signal<string | null>(null);

  constructor() {
    effect(() => {
      const position = this.scroll.scrollY() + SPY_OFFSET;
      untracked(() => this.updateActiveSection(position));
    });
  }

  toggleMenu(): void {
    this.menuOpen.update((open) => !open);
  }

  closeMenu(): void {
    this.menuOpen.set(false);
  }

  private updateActiveSection(position: number): void {
    for (const link of this.links) {
      const section = this.document.getElementById(link.id);
      if (
        section &&
        position >= section.offsetTop &&
        position < section.offsetTop + section.offsetHeight
      ) {
        this.activeSection.set(link.id);
      }
    }
  }
}
