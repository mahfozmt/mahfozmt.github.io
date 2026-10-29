import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CASE_FILTERS, CASE_STUDIES } from '../../data/case-studies.data';
import { CaseStudies } from './case-studies';

describe('CaseStudies', () => {
  let fixture: ComponentFixture<CaseStudies>;
  let root: HTMLElement;

  const cardTitles = () =>
    Array.from(root.querySelectorAll('.case-card h3 span')).map((el) => el.textContent);
  const filterButton = (id: string) =>
    root.querySelector<HTMLButtonElement>(`.filter-btn[data-filter="${id}"]`);

  beforeEach(async () => {
    await TestBed.configureTestingModule({ imports: [CaseStudies] }).compileComponents();
    fixture = TestBed.createComponent(CaseStudies);
    root = fixture.nativeElement as HTMLElement;
    await fixture.whenStable();
  });

  it('shows every case study and the architecture flow where there is one', () => {
    expect(cardTitles()).toEqual(CASE_STUDIES.map((study) => study.title));
    expect(root.querySelectorAll('.architecture-box')).toHaveLength(
      CASE_STUDIES.filter((study) => study.architecture).length,
    );
  });

  it('starts on "All Projects" with aria-selected set', () => {
    expect(filterButton('all')?.getAttribute('aria-selected')).toBe('true');
    expect(filterButton('saas')?.getAttribute('aria-selected')).toBe('false');
  });

  it.each(CASE_FILTERS.filter((filter) => filter.id !== 'all').map((filter) => [filter.id]))(
    'filters by the %s category',
    async (id) => {
      filterButton(id)?.click();
      await fixture.whenStable();

      const expected = CASE_STUDIES.filter((study) =>
        study.categories.some((category) => category === id),
      ).map((study) => study.title);
      expect(expected.length).toBeGreaterThan(0);
      expect(cardTitles()).toEqual(expected);
      expect(filterButton(id)?.classList.contains('active')).toBe(true);
      expect(filterButton(id)?.getAttribute('aria-selected')).toBe('true');
      expect(filterButton('all')?.getAttribute('aria-selected')).toBe('false');
    },
  );

  it('brings every card back when "All Projects" is chosen again', async () => {
    filterButton('mobile-iot')?.click();
    await fixture.whenStable();
    expect(cardTitles().length).toBeLessThan(CASE_STUDIES.length);

    filterButton('all')?.click();
    await fixture.whenStable();
    expect(cardTitles()).toHaveLength(CASE_STUDIES.length);
  });
});
