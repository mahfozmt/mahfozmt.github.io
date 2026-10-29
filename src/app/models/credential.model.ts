export type CredentialIcon = 'book' | 'graduation';

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
}

export interface Credential {
  readonly name: string;
  readonly organisation: string;
  readonly description: string;
  /** Extra verification link rendered after the description. */
  readonly link?: CredentialLink;
  readonly year: string;
  /** Either a badge image or a generic icon. */
  readonly badge?: CredentialBadge;
  readonly icon?: CredentialIcon;
}
