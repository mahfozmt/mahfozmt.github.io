export interface ExperienceEntry {
  readonly id: string;
  readonly title: string;
  readonly company: string;
  /** Employment type shown after the company, for example `Full-time`. */
  readonly employmentType?: string;
  /** Date range, for example `Aug 2023 – Present`. */
  readonly dates: string;
  readonly location: string;
  /** True for the role held today; it gets the pulsing timeline marker. */
  readonly current?: boolean;
  /** Rich text. Only `<strong>` markup is allowed; Angular sanitises it on render. */
  readonly summaryHtml: string;
  readonly chips: readonly string[];
}
