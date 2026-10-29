import { Credential } from '../models/credential.model';
import { SectionHeading } from '../models/section-heading.model';

export const CREDENTIALS_SECTION: SectionHeading = {
  headingId: 'cred-heading',
  eyebrow: 'Academic & Industry Credentials',
  title: 'Certifications & Education',
  description:
    'Formal training, Microsoft certifications, and verified credentials verifying software engineering expertise.',
};

export const CREDENTIALS: readonly Credential[] = [
  {
    name: 'Microsoft Certified Professional (MCP)',
    organisation: 'Microsoft Corporation',
    description:
      'Passed Exam 70-486: Developing ASP.NET MVC Web Applications (score 933) · Verification MCID: 990525782',
    link: {
      label: 'Verify on Credly ↗',
      url: 'https://www.credly.com/badges/5edb0686-f2eb-4737-a95d-3039670edd7a',
    },
    year: 'Issued: November 2020',
    badge: {
      src: 'ms-exam-486-badge.png',
      alt: 'Microsoft Exam passed badge: Developing ASP.NET MVC Web Applications',
      href: 'https://www.credly.com/badges/5edb0686-f2eb-4737-a95d-3039670edd7a',
      linkAriaLabel: 'Verify Microsoft Exam 486 badge on Credly',
    },
  },
  {
    name: 'Full Stack ASP.NET Core Specialist (96 Hours)',
    organisation: 'PencilBox Training Institute',
    description:
      'Advanced enterprise application development with ASP.NET Core, EF Core & Web API · Certificate: FSTASP/009/003',
    year: 'Completed: 2022',
    badge: {
      src: 'pencilbox-badge.png',
      alt: 'PencilBox Training Institute logo',
    },
  },
  {
    name: 'Professional Diploma: Enterprise Systems Analysis & Design (C#.NET)',
    organisation: 'IsDB-BISEW',
    description:
      'Comprehensive 1,100-hour professional diploma in C#, object-oriented analysis, SQL Server, software design patterns, and enterprise project development.',
    year: '2019 – 2020',
    icon: 'book',
  },
  {
    name: 'Bachelor of Arts (Honours)',
    organisation: 'National University, Bangladesh',
    description: 'Department of Islamic Studies · Graduated with Cumulative GPA: 3.23 / 4.00',
    year: 'Graduated: 2017',
    icon: 'graduation',
  },
];
