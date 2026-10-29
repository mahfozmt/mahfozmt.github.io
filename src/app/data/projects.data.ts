import { VERSION } from '@angular/core';

import { OpenSourceProject } from '../models/project.model';
import { SectionHeading } from '../models/section-heading.model';

export const OPEN_SOURCE_SECTION: SectionHeading = {
  headingId: 'os-heading',
  eyebrow: 'Public Code',
  title: 'Open Source & Personal Works',
  description:
    'Projects I design, build, and publish openly on GitHub to solve real-world problems and explore cutting-edge technologies.',
};

export const OPEN_SOURCE_PROJECTS: readonly OpenSourceProject[] = [
  {
    name: 'BabyKeyBoardSmashByMahfoz',
    url: 'https://github.com/mahfozmt/BabyKeyBoardSmashByMahfoz',
    description:
      'A fullscreen, toddler-proof interactive Bangla keyboard-smash learning desktop application built for Windows. Every keystroke generates high-definition animated Bangla letters, numbers, matching emojis, phonetics, and clear voice pronouncers. Built with strict keyboard hooks, automated Windows installer packaging, unit tests, and GitHub Actions CI build pipelines.',
    chips: ['.NET 8', 'WPF', 'C#', 'Windows Hook', 'MSI Installer', 'GitHub Actions CI'],
    badge: 'Featured App',
    featured: true,
  },
  {
    name: 'Doctor Appointment API',
    url: 'https://github.com/mahfozmt/DoctorAppointmentAPI',
    description:
      'Complete clinical reservation backend and Angular client featuring doctor directories, chamber slots, roster timetables, patient records, and automated serial generation using ASP.NET Core Web API and EF Core.',
    chips: ['ASP.NET Core', 'EF Core', 'Angular', 'SQL Server'],
  },
  {
    name: 'Customer Info Portal',
    url: 'https://github.com/mahfozmt/CustomerInfoPortal',
    description:
      'Modern customer profile and contact lifecycle management platform built with ASP.NET Core, TypeScript, and Angular, implementing clean REST architecture and role-based data views.',
    chips: ['ASP.NET Core', 'Angular', 'TypeScript', 'REST'],
  },
  {
    name: 'Portfolio Website (this site)',
    url: 'https://github.com/mahfozmt/mahfozmt.github.io',
    description: `This site, rebuilt with Angular ${VERSION.major} using standalone components, signals and the built-in control flow, and deployed to GitHub Pages with GitHub Actions.`,
    chips: ['Angular', 'TypeScript', 'GitHub Actions'],
  },
];
