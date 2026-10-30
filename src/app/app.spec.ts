import { VERSION } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { App } from './app';
import { NAV_LINKS } from './data/navigation.data';
import { PROFILE } from './data/profile.data';

describe('App', () => {
  let fixture: ComponentFixture<App>;
  let root: HTMLElement;

  beforeEach(async () => {
    localStorage.clear();
    await TestBed.configureTestingModule({ imports: [App] }).compileComponents();
    fixture = TestBed.createComponent(App);
    root = fixture.nativeElement as HTMLElement;
    await fixture.whenStable();
  });

  afterEach(() => {
    Reflect.deleteProperty(navigator, 'clipboard');
    Reflect.deleteProperty(Element.prototype, 'scrollIntoView');
    history.replaceState(null, '', '/');
  });

  describe('in-page links', () => {
    const click = (link: Element, init: MouseEventInit = {}): MouseEvent => {
      const event = new MouseEvent('click', {
        bubbles: true,
        cancelable: true,
        button: 0,
        ...init,
      });
      link.dispatchEvent(event);
      return event;
    };

    it('scrolls to the section and records the hash without a page load', () => {
      const scrollIntoView = vi.fn();
      Object.defineProperty(Element.prototype, 'scrollIntoView', {
        configurable: true,
        value: scrollIntoView,
      });
      const link = root.querySelector('nav.desktop-nav a[href="#skills"]') as HTMLAnchorElement;

      const event = click(link);

      expect(event.defaultPrevented).toBe(true);
      expect(scrollIntoView).toHaveBeenCalledOnce();
      expect(scrollIntoView.mock.contexts[0]).toBe(root.querySelector('#skills'));
      expect(location.hash).toBe('#skills');
    });

    /**
     * Clicks the link and reports whether the app's document-level handler cancelled the default
     * action. The window listener runs after it and then cancels the click itself, so jsdom does not
     * try to navigate.
     */
    const clickAndSeeIfHandled = (link: Element, init: MouseEventInit = {}): boolean => {
      let handled = false;
      window.addEventListener(
        'click',
        (event) => {
          handled = event.defaultPrevented;
          event.preventDefault();
        },
        { once: true },
      );
      click(link, init);
      return handled;
    };

    it('leaves modified clicks (new tab, new window) to the browser', () => {
      const scrollIntoView = vi.fn();
      Object.defineProperty(Element.prototype, 'scrollIntoView', {
        configurable: true,
        value: scrollIntoView,
      });
      const link = root.querySelector('nav.desktop-nav a[href="#skills"]') as HTMLAnchorElement;

      expect(clickAndSeeIfHandled(link, { ctrlKey: true })).toBe(false);
      expect(scrollIntoView).not.toHaveBeenCalled();
      expect(location.hash).toBe('');
    });

    it('does not touch links to other sites', () => {
      const external = root.querySelector('a[href^="https://github.com"]') as HTMLAnchorElement;

      expect(clickAndSeeIfHandled(external)).toBe(false);
      expect(location.hash).toBe('');
    });
  });

  it('has exactly one h1 and one main landmark', () => {
    expect(root.querySelectorAll('h1')).toHaveLength(1);
    expect(root.querySelectorAll('main')).toHaveLength(1);
    expect(root.querySelectorAll('header')).toHaveLength(1);
    expect(root.querySelectorAll('footer')).toHaveLength(1);
  });

  it('names the person and the role in the main heading, for search engines and screen readers', () => {
    const heading = root.querySelector('h1')?.textContent ?? '';

    expect(heading).toContain('Mahfozur Rahman');
    expect(heading).toContain('Enterprise SaaS');
  });

  it('renders every section that the navigation links to', () => {
    for (const link of NAV_LINKS) {
      const section = root.querySelector(`section#${link.id}`);
      expect(section, `section #${link.id}`).not.toBeNull();

      const labelledBy = section?.getAttribute('aria-labelledby') ?? '';
      expect(root.querySelector(`#${labelledBy}`), `heading for #${link.id}`).not.toBeNull();
    }
  });

  it('gives every image alternative text', () => {
    const images = Array.from(root.querySelectorAll('img'));

    expect(images.length).toBeGreaterThanOrEqual(3);
    for (const image of images) {
      expect(image.getAttribute('alt')?.trim()).toBeTruthy();
    }
  });

  it('links the certification badge to its Credly verification page', () => {
    const link = root.querySelector<HTMLAnchorElement>('a.cred-badge');

    expect(link?.getAttribute('href')).toContain('credly.com/badges/');
    expect(link?.querySelector('img')?.getAttribute('src')).toContain('ms-exam-486-badge.png');
  });

  it('shows a logo on every credential card, white-plated for the two institutions', () => {
    const cards = Array.from(root.querySelectorAll('#credentials .cred-card:not(.training-card)'));

    expect(cards).toHaveLength(4);
    for (const card of cards) {
      expect(card.querySelector('.cred-badge img')).not.toBeNull();
    }
    const plated = Array.from(root.querySelectorAll('.cred-plate img')).map((img) =>
      img.getAttribute('src'),
    );
    expect(plated).toEqual(['isdb-bisew-logo.png', 'nu-crest.png']);
  });

  it('lists the two 2019 trainings in their own row below the credentials', () => {
    const title = root.querySelector('#credentials .training-title');
    const names = Array.from(root.querySelectorAll('#credentials .training-card .cred-name')).map(
      (el) => el.textContent,
    );

    expect(title?.textContent).toBe('Additional Training');
    expect(names).toEqual([
      'Professional Customer Service (PCS)',
      'Communicative English Language Speaking',
    ]);
  });

  it('renders the inline <strong> markup of the hero lead through the sanitiser', () => {
    const strong = Array.from(root.querySelectorAll('.hero-lead strong')).map(
      (el) => el.textContent,
    );

    expect(strong).toContain('BizTRAQ');
    expect(root.querySelector('.hero-lead')?.textContent).not.toContain('<strong>');
  });

  it('shows ampersands as plain characters, not as entities', () => {
    const text = root.textContent ?? '';

    expect(text).toContain('Open Source & Personal Works');
    expect(text).not.toMatch(/&amp;|&amp\b/);
  });

  it('adds the portfolio card with the running Angular major version', () => {
    const cards = Array.from(root.querySelectorAll('#open-source .os-card'));
    const last = cards[cards.length - 1];

    expect(last.querySelector('.os-card-title span')?.textContent).toBe(
      'Portfolio Website (this site)',
    );
    expect(last.querySelector('a')?.getAttribute('href')).toBe(
      'https://github.com/mahfozmt/mahfozmt.github.io',
    );
    expect(last.querySelector('.os-card-desc')?.textContent).toContain(
      `rebuilt with Angular ${VERSION.major} using standalone components`,
    );
  });

  describe('copy email buttons', () => {
    it.each([['#copyEmailHeroBtn'], ['#copyEmailCtaBtn']])(
      '%s copies the address and shows the toast',
      async (selector) => {
        const writeText = vi.fn().mockResolvedValue(undefined);
        Object.defineProperty(navigator, 'clipboard', { configurable: true, value: { writeText } });
        const toast = root.querySelector('#toastNotification');
        expect(toast?.classList.contains('show')).toBe(false);

        root.querySelector<HTMLButtonElement>(selector)?.click();

        await vi.waitFor(() => {
          fixture.detectChanges();
          expect(toast?.classList.contains('show')).toBe(true);
        });
        expect(writeText).toHaveBeenCalledExactlyOnceWith(PROFILE.email);
        expect(root.querySelector('#toastMessage')?.textContent).toBe(
          `Email copied: ${PROFILE.email}`,
        );
      },
    );
  });
});
