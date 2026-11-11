import { TestBed } from '@angular/core/testing';

import { THEME_STORAGE_KEY, ThemeService } from './theme.service';

function stubMatchMedia(matches: boolean): void {
  Object.defineProperty(window, 'matchMedia', {
    configurable: true,
    writable: true,
    value: vi.fn().mockReturnValue({ matches }),
  });
}

describe('ThemeService', () => {
  beforeEach(() => {
    localStorage.clear();
    document.documentElement.removeAttribute('data-theme');
  });

  afterEach(() => {
    vi.restoreAllMocks();
    Reflect.deleteProperty(window, 'matchMedia');
  });

  it('starts with the saved theme when there is one', () => {
    localStorage.setItem(THEME_STORAGE_KEY, 'light');
    stubMatchMedia(true);

    expect(TestBed.inject(ThemeService).theme()).toBe('light');
  });

  it('defaults to light when the OS prefers dark and nothing is saved', () => {
    stubMatchMedia(true);
    expect(TestBed.inject(ThemeService).theme()).toBe('light');
  });

  it('falls back to light when the OS prefers light', () => {
    stubMatchMedia(false);
    expect(TestBed.inject(ThemeService).theme()).toBe('light');
  });

  it('ignores a saved value that is not a known theme', () => {
    localStorage.setItem(THEME_STORAGE_KEY, 'purple');
    stubMatchMedia(true);

    expect(TestBed.inject(ThemeService).theme()).toBe('light');
  });

  it('applies the theme to the data-theme attribute on <html>', () => {
    stubMatchMedia(true);
    const service = TestBed.inject(ThemeService);
    TestBed.tick();
    expect(document.documentElement.getAttribute('data-theme')).toBe('light');

    service.toggle();
    TestBed.tick();
    expect(document.documentElement.getAttribute('data-theme')).toBe('dark');
  });

  it('persists the choice to localStorage when toggled', () => {
    stubMatchMedia(true);
    const service = TestBed.inject(ThemeService);

    service.toggle();
    expect(localStorage.getItem(THEME_STORAGE_KEY)).toBe('dark');

    service.toggle();
    expect(localStorage.getItem(THEME_STORAGE_KEY)).toBe('light');
  });

  it('keeps working when localStorage is blocked', () => {
    stubMatchMedia(true);
    vi.spyOn(Storage.prototype, 'getItem').mockImplementation(() => {
      throw new DOMException('blocked', 'SecurityError');
    });
    vi.spyOn(Storage.prototype, 'setItem').mockImplementation(() => {
      throw new DOMException('blocked', 'SecurityError');
    });

    const service = TestBed.inject(ThemeService);
    expect(service.theme()).toBe('light');
    expect(() => service.toggle()).not.toThrow();
    expect(service.theme()).toBe('dark');
  });
});
