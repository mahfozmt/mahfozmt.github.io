import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NAV_LINKS } from '../../data/navigation.data';
import { THEME_STORAGE_KEY } from '../../services/theme.service';
import { TopNav } from './top-nav';

describe('TopNav', () => {
  let fixture: ComponentFixture<TopNav>;
  let root: HTMLElement;

  const query = <T extends Element = HTMLElement>(selector: string): T => {
    const element = root.querySelector<T>(selector);
    if (!element) {
      throw new Error(`Missing element: ${selector}`);
    }
    return element;
  };

  beforeEach(async () => {
    localStorage.clear();
    document.documentElement.removeAttribute('data-theme');
    Object.defineProperty(window, 'matchMedia', {
      configurable: true,
      writable: true,
      value: vi.fn().mockReturnValue({ matches: true }),
    });

    await TestBed.configureTestingModule({ imports: [TopNav] }).compileComponents();
    fixture = TestBed.createComponent(TopNav);
    root = fixture.nativeElement as HTMLElement;
    await fixture.whenStable();
  });

  afterEach(() => {
    Reflect.deleteProperty(window, 'matchMedia');
  });

  describe('links', () => {
    it('uses the site favicon as the brand mark', () => {
      expect(query<HTMLImageElement>('.brand-icon').getAttribute('src')).toBe('/favicon.svg');
    });

    it('renders a desktop and a mobile link for every section', () => {
      const desktop = Array.from(root.querySelectorAll('nav.desktop-nav a')).map((a) =>
        a.getAttribute('href'),
      );
      const mobile = Array.from(root.querySelectorAll('.mobile-link')).map((a) =>
        a.getAttribute('href'),
      );
      const expected = NAV_LINKS.map((link) => `#${link.id}`);

      expect(desktop).toEqual(expected);
      expect(mobile).toEqual(expected);
    });

    it('offers the CV as a download in the bar and in the drawer', () => {
      const downloads = Array.from(root.querySelectorAll('a[download]'));

      expect(downloads).toHaveLength(2);
      for (const link of downloads) {
        expect(link.getAttribute('href')).toContain('Mahfozur_Rahman_CV.pdf');
      }
    });
  });

  describe('theme toggle', () => {
    it('switches the data-theme attribute and remembers the choice', async () => {
      const button = query<HTMLButtonElement>('#themeToggleBtn');
      expect(document.documentElement.getAttribute('data-theme')).toBe('light');

      button.click();
      await fixture.whenStable();
      expect(document.documentElement.getAttribute('data-theme')).toBe('dark');
      expect(localStorage.getItem(THEME_STORAGE_KEY)).toBe('dark');

      button.click();
      await fixture.whenStable();
      expect(document.documentElement.getAttribute('data-theme')).toBe('light');
      expect(localStorage.getItem(THEME_STORAGE_KEY)).toBe('light');
    });

    it('shows a sun in dark mode and a moon in light mode', async () => {
      const icon = query<SVGElement>('#themeIcon');
      expect(icon.querySelector('circle')).toBeNull();
      expect(icon.querySelector('path')).not.toBeNull();

      query<HTMLButtonElement>('#themeToggleBtn').click();
      await fixture.whenStable();
      expect(icon.querySelector('circle')).not.toBeNull();
      expect(icon.querySelector('path')).toBeNull();
    });
  });

  describe('mobile menu', () => {
    it('starts closed', () => {
      expect(query('#mobileMenuBtn').getAttribute('aria-expanded')).toBe('false');
      expect(query('#mobileMenuBtn').getAttribute('aria-label')).toBe('Open mobile menu');
      expect(query('#mobileDrawer').classList.contains('open')).toBe(false);
    });

    it('opens and closes with the menu button, keeping aria-expanded and aria-label in sync', async () => {
      const button = query<HTMLButtonElement>('#mobileMenuBtn');
      const drawer = query('#mobileDrawer');

      button.click();
      await fixture.whenStable();
      expect(button.getAttribute('aria-expanded')).toBe('true');
      expect(button.getAttribute('aria-label')).toBe('Close mobile menu');
      expect(drawer.classList.contains('open')).toBe(true);

      button.click();
      await fixture.whenStable();
      expect(button.getAttribute('aria-expanded')).toBe('false');
      expect(button.getAttribute('aria-label')).toBe('Open mobile menu');
      expect(drawer.classList.contains('open')).toBe(false);
    });

    it('closes after a link inside the drawer is chosen', async () => {
      const button = query<HTMLButtonElement>('#mobileMenuBtn');
      button.click();
      await fixture.whenStable();
      expect(query('#mobileDrawer').classList.contains('open')).toBe(true);

      query<HTMLAnchorElement>('.mobile-link').addEventListener('click', (event) =>
        event.preventDefault(),
      );
      query<HTMLAnchorElement>('.mobile-link').click();
      await fixture.whenStable();

      expect(query('#mobileDrawer').classList.contains('open')).toBe(false);
      expect(button.getAttribute('aria-expanded')).toBe('false');
      expect(button.getAttribute('aria-label')).toBe('Open mobile menu');
    });

    it('closes on Escape key press and restores focus to the menu toggle button', async () => {
      const button = query<HTMLButtonElement>('#mobileMenuBtn');
      button.click();
      await fixture.whenStable();
      expect(query('#mobileDrawer').classList.contains('open')).toBe(true);

      const focusSpy = vi.spyOn(button, 'focus');

      document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape', bubbles: true }));
      await fixture.whenStable();

      expect(query('#mobileDrawer').classList.contains('open')).toBe(false);
      expect(button.getAttribute('aria-expanded')).toBe('false');
      expect(button.getAttribute('aria-label')).toBe('Open mobile menu');
      expect(focusSpy).toHaveBeenCalledOnce();
    });
  });
});
