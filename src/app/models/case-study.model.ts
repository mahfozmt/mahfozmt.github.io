export type CaseCategory = 'saas' | 'architecture' | 'mobile-iot';
export type CaseFilter = 'all' | CaseCategory;

export interface FilterOption {
  readonly id: CaseFilter;
  readonly label: string;
}

export interface Highlight {
  /** Bold lead-in, rendered without the trailing colon. */
  readonly label: string;
  readonly text: string;
}

export interface ArchitectureFlow {
  readonly label: string;
  readonly nodes: readonly string[];
}

export interface ExternalSite {
  readonly label: string;
  readonly url: string;
}

export interface CaseStudy {
  readonly id: string;
  readonly title: string;
  readonly company: string;
  readonly period: string;
  readonly site: ExternalSite;
  readonly badge: string;
  readonly categories: readonly CaseCategory[];
  readonly scope: string;
  readonly highlights: readonly Highlight[];
  readonly architecture?: ArchitectureFlow;
  readonly chips: readonly string[];
}
