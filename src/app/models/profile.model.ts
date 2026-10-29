export interface HeroStat {
  /** Text before the highlighted part, for example `6` or `US `. */
  readonly prefix: string;
  /** Part rendered in the accent colour, for example `+` or `&`. */
  readonly highlight?: string;
  /** Text after the highlighted part, for example ` BD`. */
  readonly suffix?: string;
  readonly label: string;
  readonly sub: string;
}

export interface Profile {
  readonly name: string;
  readonly role: string;
  readonly email: string;
  readonly cvFile: string;
  readonly cvDownloadName: string;
  readonly photoFile: string;
  readonly photoAlt: string;
  readonly linkedInUrl: string;
  readonly gitHubUrl: string;
}

export interface HeroContent {
  readonly statusText: string;
  readonly locationBadge: string;
  readonly headlineStart: string;
  readonly headlineHighlight: string;
  readonly headlineEnd: string;
  readonly subhead: string;
  /** Rich text. Only `<strong>` markup is allowed; Angular sanitises it on render. */
  readonly leadHtml: string;
  readonly cardChips: readonly string[];
  readonly stats: readonly HeroStat[];
}

export type ContactIcon = 'mail' | 'linkedin' | 'github' | 'download';

export interface ContactLinkRow {
  readonly icon: ContactIcon;
  readonly label: string;
  readonly href: string;
  readonly external: boolean;
  /** Suggested file name when the link downloads a file. */
  readonly download?: string;
}

export interface ContactContent {
  readonly statusText: string;
  readonly headingId: string;
  readonly heading: string;
  readonly paragraph: string;
  readonly emailButtonLabel: string;
  readonly copyButtonLabel: string;
  readonly links: readonly ContactLinkRow[];
}
