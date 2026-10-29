export interface OpenSourceProject {
  readonly name: string;
  readonly url: string;
  readonly description: string;
  readonly chips: readonly string[];
  /** Badge text, shown on featured projects. */
  readonly badge?: string;
  /** Featured projects span the whole grid row. */
  readonly featured?: boolean;
}
