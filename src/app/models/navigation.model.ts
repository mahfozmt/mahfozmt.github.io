export interface NavLink {
  /** Id of the section this link scrolls to. */
  readonly id: string;
  /** Short label used by the desktop navigation. */
  readonly label: string;
  /** Longer label used by the mobile drawer. */
  readonly mobileLabel: string;
}

export interface FooterLink {
  readonly label: string;
  readonly href: string;
  /** Opens in a new tab when true. */
  readonly external: boolean;
}
