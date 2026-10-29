import { FooterLink, NavLink } from '../models/navigation.model';
import { PROFILE } from './profile.data';

export const NAV_LINKS: readonly NavLink[] = [
  { id: 'work', label: 'Work', mobileLabel: 'Featured Work' },
  { id: 'experience', label: 'Experience', mobileLabel: 'Work Experience' },
  { id: 'ai', label: 'AI', mobileLabel: 'AI-Assisted Engineering' },
  { id: 'open-source', label: 'Open Source', mobileLabel: 'Open Source' },
  { id: 'skills', label: 'Skills', mobileLabel: 'Technical Skills' },
  { id: 'credentials', label: 'Credentials', mobileLabel: 'Certifications & Education' },
  { id: 'contact', label: 'Contact', mobileLabel: 'Contact & Inquiries' },
];

export const FOOTER_LINKS: readonly FooterLink[] = [
  { label: 'Back to top ↑', href: '#top', external: false },
  { label: 'GitHub', href: PROFILE.gitHubUrl, external: true },
  { label: 'LinkedIn', href: PROFILE.linkedInUrl, external: true },
  { label: 'Email', href: `mailto:${PROFILE.email}`, external: false },
];

export const FOOTER_TEXT = 'Mahfozur Rahman. Built with modern, accessible web standards.';

export const BRAND = {
  initials: 'MR',
  tagline: 'Full-Stack .NET & Angular',
} as const;
