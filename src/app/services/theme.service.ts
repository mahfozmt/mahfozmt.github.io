import { DOCUMENT } from '@angular/common';
import { Injectable, effect, inject, signal } from '@angular/core';

export type Theme = 'dark' | 'light';

export const THEME_STORAGE_KEY = 'theme';

function isTheme(value: unknown): value is Theme {
  return value === 'dark' || value === 'light';
}

/**
 * Colour theme state. The theme is mirrored to the `data-theme` attribute on `<html>`, which the
 * global stylesheet keys off, and persisted to localStorage when the visitor toggles it.
 *
 * The first paint is handled by a tiny inline script in index.html so there is no flash of the wrong
 * theme; this service resolves the same value (saved choice first, then the OS preference).
 */
@Injectable({ providedIn: 'root' })
export class ThemeService {
  private readonly document = inject(DOCUMENT);

  readonly theme = signal<Theme>(this.resolveInitialTheme());

  constructor() {
    effect(() => {
      this.document.documentElement.setAttribute('data-theme', this.theme());
    });
  }

  toggle(): void {
    const next: Theme = this.theme() === 'dark' ? 'light' : 'dark';
    this.theme.set(next);
    this.persist(next);
  }

  private resolveInitialTheme(): Theme {
    const saved = this.readSavedTheme();
    if (saved) {
      return saved;
    }
    const view = this.document.defaultView;
    const prefersDark = view?.matchMedia?.('(prefers-color-scheme: dark)').matches ?? false;
    return prefersDark ? 'dark' : 'light';
  }

  private readSavedTheme(): Theme | null {
    try {
      const saved = this.document.defaultView?.localStorage.getItem(THEME_STORAGE_KEY);
      return isTheme(saved) ? saved : null;
    } catch {
      // Storage can be blocked (private mode, strict cookie settings).
      return null;
    }
  }

  private persist(theme: Theme): void {
    try {
      this.document.defaultView?.localStorage.setItem(THEME_STORAGE_KEY, theme);
    } catch {
      // Not being able to remember the choice is fine; the toggle still works for this visit.
    }
  }
}
