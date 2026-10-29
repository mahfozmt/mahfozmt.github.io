import { Credential, Training } from '../models/credential.model';
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
    badge: {
      src: 'isdb-bisew-logo.png',
      alt: 'IsDB-BISEW logo',
      plate: true,
    },
  },
  {
    name: 'Bachelor of Arts (Honours)',
    organisation: 'National University, Bangladesh',
    description: 'Department of Islamic Studies · Graduated with Cumulative GPA: 3.23 / 4.00',
    year: 'Graduated: 2017',
    badge: {
      src: 'nu-crest.png',
      alt: 'National University, Bangladesh crest',
      plate: true,
    },
  },
];

export const TRAINING_TITLE = 'Additional Training';

export const TRAININGS: readonly Training[] = [
  {
    name: 'Professional Customer Service (PCS)',
    organisation: 'Digital Hub Bangladesh Ltd',
    description:
      'Call-centre focused customer service course, 220 hours, run under the Skills for Employment Investment Program (SEIP) and BACCO, supervised by the Ministry of Finance, Bangladesh.',
    year: 'Nov 2018 – 2019',
    icon: 'headset',
  },
  {
    name: 'Communicative English Language Speaking',
    organisation: 'Workplace Skills Development Academy (WSDA), New Zealand',
    description:
      'Spoken business English, 5 days (20 hours), taught in Bangladesh by a WSDA trainer as part of the same SEIP and BACCO programme.',
    year: 'Completed: 2019',
    icon: 'speech',
  },
];
