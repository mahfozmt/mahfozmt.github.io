/** Eyebrow, title and lead paragraph shown above every content section. */
export interface SectionHeading {
  /** Id of the `<h2>`; the surrounding `<section>` points at it with `aria-labelledby`. */
  readonly headingId: string;
  readonly eyebrow: string;
  readonly title: string;
  readonly description: string;
}
