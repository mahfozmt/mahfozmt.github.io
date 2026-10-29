import { VERSION } from '@angular/core';

import { AI_CARDS, AI_SECTION } from './ai.data';
import { CASE_FILTERS, CASE_STUDIES, WORK_SECTION } from './case-studies.data';
import { CREDENTIALS, CREDENTIALS_SECTION, TRAINING_TITLE, TRAININGS } from './credentials.data';
import { EXPERIENCE, EXPERIENCE_SECTION } from './experience.data';
import { FOOTER_LINKS, NAV_LINKS } from './navigation.data';
import { CONTACT, HERO, PROFILE } from './profile.data';
import { OPEN_SOURCE_PROJECTS, OPEN_SOURCE_SECTION } from './projects.data';
import { SKILLS_SECTION, SKILL_GROUPS } from './skills.data';

/** Every string in the data files, tagged with the path it lives at. */
function collectStrings(
  value: unknown,
  path: string,
  into: [string, string][] = [],
): [string, string][] {
  if (typeof value === 'string') {
    into.push([path, value]);
  } else if (Array.isArray(value)) {
    value.forEach((item, index) => collectStrings(item, `${path}[${index}]`, into));
  } else if (value && typeof value === 'object') {
    for (const [key, item] of Object.entries(value)) {
      collectStrings(item, `${path}.${key}`, into);
    }
  }
  return into;
}

const ALL_DATA = {
  AI_SECTION,
  AI_CARDS,
  WORK_SECTION,
  CASE_FILTERS,
  CASE_STUDIES,
  CREDENTIALS_SECTION,
  CREDENTIALS,
  TRAINING_TITLE,
  TRAININGS,
  EXPERIENCE_SECTION,
  EXPERIENCE,
  NAV_LINKS,
  FOOTER_LINKS,
  PROFILE,
  HERO,
  CONTACT,
  OPEN_SOURCE_SECTION,
  OPEN_SOURCE_PROJECTS,
  SKILLS_SECTION,
  SKILL_GROUPS,
};

const allStrings = collectStrings(ALL_DATA, 'data');
/** Fields ending in `Html` are rendered with [innerHTML]; everything else is plain text. */
const plainStrings = allStrings.filter(([path]) => !path.endsWith('Html'));
const htmlStrings = allStrings.filter(([path]) => path.endsWith('Html'));

describe('content data', () => {
  describe('text hygiene', () => {
    it('has no empty strings', () => {
      expect(allStrings.filter(([, text]) => text.trim() === '')).toEqual([]);
    });

    it('has no stray whitespace at the edges, doubled spaces or line breaks', () => {
      // Intentional edges: the hero headline is split around its highlighted words.
      const allowed = ['data.HERO.headlineStart', 'data.HERO.headlineEnd', 'data.HERO.stats'];
      const offenders = allStrings.filter(
        ([path, text]) =>
          !allowed.some((prefix) => path.startsWith(prefix)) &&
          (text !== text.trim() || /\s{2,}|\n/.test(text)),
      );
      expect(offenders).toEqual([]);
    });

    it('keeps plain-text fields free of HTML tags and HTML entities', () => {
      const entity =
        /&(?:amp|lt|gt|quot|apos|nbsp|middot|copy|ndash|mdash|rarr|#\d+|#x[\da-f]+)\b;?/i;
      const offenders = plainStrings.filter(
        ([, text]) => /<[a-z/!]/i.test(text) || entity.test(text),
      );
      expect(offenders).toEqual([]);
    });

    it('lets HTML fields use <strong> only, with well-formed tags and complete entities', () => {
      expect(htmlStrings.length).toBeGreaterThan(0);
      for (const [path, html] of htmlStrings) {
        const tags = html.match(/<[^>]*>/g) ?? [];
        expect(
          tags.every((tag) => tag === '<strong>' || tag === '</strong>'),
          `${path} only contains <strong>`,
        ).toBe(true);
        expect(html.split('<strong>').length, `${path} balances <strong>`).toBe(
          html.split('</strong>').length,
        );
        // A bare `&` must start a complete entity such as `&amp;`; `&amp` without `;` would be broken.
        expect(/&(?![a-z]+;|#\d+;|#x[\da-f]+;)/i.test(html), `${path} entities end with ;`).toBe(
          false,
        );
      }
    });
  });

  describe('experience', () => {
    it('has at least one entry', () => {
      expect(EXPERIENCE.length).toBeGreaterThan(0);
    });

    it.each(EXPERIENCE.map((entry) => [entry.id, entry] as const))(
      '%s has a title, company, dates, location, summary and chips',
      (_id, entry) => {
        expect(entry.title).toBeTruthy();
        expect(entry.company).toBeTruthy();
        expect(entry.dates).toMatch(/^[A-Z][a-z]{2} \d{4} – (?:Present|[A-Z][a-z]{2} \d{4})$/);
        expect(entry.location).toBeTruthy();
        expect(entry.summaryHtml.length).toBeGreaterThan(40);
        expect(entry.chips.length).toBeGreaterThan(0);
      },
    );

    it('has unique ids and at most one current role', () => {
      expect(new Set(EXPERIENCE.map((entry) => entry.id)).size).toBe(EXPERIENCE.length);
      expect(EXPERIENCE.filter((entry) => entry.current)).toHaveLength(1);
    });
  });

  describe('case studies', () => {
    it.each(CASE_STUDIES.map((study) => [study.id, study] as const))(
      '%s is complete',
      (_id, study) => {
        expect(study.title).toBeTruthy();
        expect(study.company).toBeTruthy();
        expect(study.period).toBeTruthy();
        expect(study.site.url).toMatch(/^https:\/\//);
        expect(study.categories.length).toBeGreaterThan(0);
        expect(study.highlights.length).toBeGreaterThan(0);
        expect(study.chips.length).toBeGreaterThan(0);
        for (const highlight of study.highlights) {
          expect(highlight.label).toBeTruthy();
          expect(highlight.label.endsWith(':')).toBe(false);
          expect(highlight.text).toBeTruthy();
        }
        if (study.architecture) {
          expect(study.architecture.nodes.length).toBeGreaterThan(1);
        }
      },
    );

    it('only uses categories that have a filter button', () => {
      const filterIds = CASE_FILTERS.map((filter) => filter.id);
      for (const study of CASE_STUDIES) {
        for (const category of study.categories) {
          expect(filterIds).toContain(category);
        }
      }
    });

    it('has unique ids', () => {
      expect(new Set(CASE_STUDIES.map((study) => study.id)).size).toBe(CASE_STUDIES.length);
    });
  });

  describe('open source', () => {
    it('lists GitHub repositories with at least one chip each', () => {
      for (const project of OPEN_SOURCE_PROJECTS) {
        expect(project.url).toMatch(/^https:\/\/github\.com\/mahfozmt\//);
        expect(project.description).toBeTruthy();
        expect(project.chips.length).toBeGreaterThan(0);
      }
    });

    it('ends with this site, naming the Angular version it is built with', () => {
      const last = OPEN_SOURCE_PROJECTS[OPEN_SOURCE_PROJECTS.length - 1];

      expect(last.name).toBe('Portfolio Website (this site)');
      expect(last.url).toBe('https://github.com/mahfozmt/mahfozmt.github.io');
      expect(last.description).toBe(
        `This site, rebuilt with Angular ${VERSION.major} using standalone components, signals and the built-in control flow, and deployed to GitHub Pages with GitHub Actions.`,
      );
      expect(last.chips).toEqual(['Angular', 'TypeScript', 'GitHub Actions']);
    });
  });

  describe('skills, credentials and AI', () => {
    it('gives every skill group a title, icon and chips', () => {
      for (const group of SKILL_GROUPS) {
        expect(group.title).toBeTruthy();
        expect(group.icon).toBeTruthy();
        expect(group.chips.length).toBeGreaterThan(0);
      }
      expect(new Set(SKILL_GROUPS.map((group) => group.id)).size).toBe(SKILL_GROUPS.length);
    });

    it('gives every credential a name, organisation, year and a badge or logo image', () => {
      for (const credential of CREDENTIALS) {
        expect(credential.name).toBeTruthy();
        expect(credential.organisation).toBeTruthy();
        expect(credential.year).toBeTruthy();
        expect(credential.badge.src).toMatch(/\.png$/);
        expect(credential.badge.alt).toBeTruthy();
      }
    });

    it('lists the two SEIP-BACCO trainings of one programme, with their hours and dates', () => {
      expect(TRAININGS.map((training) => training.name)).toEqual([
        'Professional Customer Service (PCS)',
        'Communicative English Language Speaking',
      ]);
      expect(TRAININGS.map((training) => training.year)).toEqual([
        'Nov 2018 – 2019',
        'Completed: 2019',
      ]);
      for (const training of TRAININGS) {
        expect(training.organisation).toBeTruthy();
        expect(training.description).toContain('SEIP');
        expect(training.description).toContain('BACCO');
      }
      expect(TRAININGS[0].description).toContain('220 hours');
      expect(TRAININGS[1].description).toContain('20 hours');
    });

    it('links the Microsoft badge to Credly', () => {
      const microsoft = CREDENTIALS[0];

      expect(microsoft.badge?.href).toMatch(/^https:\/\/www\.credly\.com\/badges\//);
      expect(microsoft.link?.url).toBe(microsoft.badge?.href);
    });

    it('describes every AI card with a badge and chips', () => {
      for (const card of AI_CARDS) {
        expect(card.title).toBeTruthy();
        expect(card.badge).toBeTruthy();
        expect(card.chips.length).toBeGreaterThan(0);
      }
    });
  });

  describe('profile and navigation', () => {
    it('uses one e-mail address everywhere', () => {
      expect(PROFILE.email).toMatch(/^[^@\s]+@[^@\s]+\.[a-z]+$/);
      expect(CONTACT.copyButtonLabel).toContain(PROFILE.email);
      const mailLinks = [...CONTACT.links, ...FOOTER_LINKS].filter((link) =>
        link.href.startsWith('mailto:'),
      );
      expect(mailLinks.length).toBeGreaterThan(0);
      for (const link of mailLinks) {
        expect(link.href).toBe(`mailto:${PROFILE.email}`);
      }
    });

    it('has navigation links with unique ids', () => {
      expect(new Set(NAV_LINKS.map((link) => link.id)).size).toBe(NAV_LINKS.length);
    });

    it('has four hero stats', () => {
      expect(HERO.stats).toHaveLength(4);
    });
  });
});
