import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BACK_TO_TOP_THRESHOLD, BackToTop } from './back-to-top';

function scrollTo(y: number): void {
  Object.defineProperty(window, 'scrollY', { configurable: true, value: y });
  window.dispatchEvent(new Event('scroll'));
}

describe('BackToTop', () => {
  let fixture: ComponentFixture<BackToTop>;
  let button: HTMLButtonElement;

  beforeEach(async () => {
    scrollTo(0);
    await TestBed.configureTestingModule({ imports: [BackToTop] }).compileComponents();
    fixture = TestBed.createComponent(BackToTop);
    await fixture.whenStable();
    button = (fixture.nativeElement as HTMLElement).querySelector(
      '#backToTopBtn',
    ) as HTMLButtonElement;
  });

  afterEach(() => {
    Reflect.deleteProperty(window, 'scrollY');
    vi.restoreAllMocks();
  });

  it('is hidden near the top of the page', () => {
    expect(button.classList.contains('visible')).toBe(false);
  });

  it('appears once the page is scrolled past the threshold', async () => {
    scrollTo(BACK_TO_TOP_THRESHOLD + 1);
    await fixture.whenStable();
    expect(button.classList.contains('visible')).toBe(true);

    scrollTo(BACK_TO_TOP_THRESHOLD);
    await fixture.whenStable();
    expect(button.classList.contains('visible')).toBe(false);
  });

  it('scrolls smoothly back to the top when clicked', () => {
    const scrollToSpy = vi.spyOn(window, 'scrollTo').mockImplementation(() => undefined);

    button.click();

    expect(scrollToSpy).toHaveBeenCalledWith({ top: 0, behavior: 'smooth' });
  });
});
