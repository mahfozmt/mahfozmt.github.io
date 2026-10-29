export type TrainingIcon = 'headset' | 'speech';

export interface CredentialLink {
  readonly label: string;
  readonly url: string;
}

export interface CredentialBadge {
  readonly src: string;
  readonly alt: string;
  /** Verification page the badge image links to, when there is one. */
  readonly href?: string;
  readonly linkAriaLabel?: string;
  /** Sits the image on a white round plate, for logos with a transparent background. */
  readonly plate?: boolean;
}

export interface Credential {
  readonly name: string;
  readonly organisation: string;
  readonly description: string;
  /** Extra verification link rendered after the description. */
  readonly link?: CredentialLink;
  readonly year: string;
  readonly badge: CredentialBadge;
}

/** Short courses that have no badge or logo of their own, shown as a compact row. */
export interface Training {
  readonly name: string;
  readonly organisation: string;
  readonly description: string;
  readonly year: string;
  readonly icon: TrainingIcon;
}
