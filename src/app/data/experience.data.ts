import { ExperienceEntry } from '../models/experience.model';
import { SectionHeading } from '../models/section-heading.model';

export const EXPERIENCE_SECTION: SectionHeading = {
  headingId: 'exp-heading',
  eyebrow: 'Career History & Sector Impact',
  title: 'Professional Experience',
  description:
    'Six years of continuous full-stack engineering building and supporting production software across enterprise document/workflow SaaS, PropTech/FinTech building accounting, GPS fleet telematics, and live-touring operations.',
};

export const EXPERIENCE: readonly ExperienceEntry[] = [
  {
    id: 'cobait',
    title: 'Software Developer',
    company: 'COBAIT',
    logoUrl: '/logos/cobait.png',
    logoAlt: 'COBAIT Logo',
    sectorTag:
      'Enterprise Cloud SaaS (BizTRAQ) · Managed IT, HIPAA Compliance & Business Process Automation (Houston, TX & Dhaka)',
    employmentType: 'Full-time',
    dates: 'Aug 2023 – Present',
    location: 'Dhaka, Bangladesh (Hybrid)',
    current: true,
    summaryHtml:
      'Building <strong>BizTRAQ</strong> (biztraq.com) for Triulta, Houston, TX, USA—a multi-tenant Business Information Platform on Microsoft Azure that unifies <strong>BizDRIVE</strong> cloud file storage, <strong>Global File Explorer (GFE)</strong>, <strong>BizTRAQ Libraries</strong>, and <strong>Document Routing &amp; Signing (DRS)</strong> into configurable solutions for CRM, Contract Management, Procurement, HR, Asset Management, Healthcare (HIPAA), and Fuel Distribution. Built two-factor authentication (hashed email/SMS codes, five-attempt lockout, 30-second resend cooldown, Playwright E2E tests), the .NET 8 Blazor document service (Telerik, SuperDoc, native DOCX/XLSX editing, PDF conversion, OCR, Docker, GitHub Actions CI/CD to Azure with OpenID Connect), BizDRIVE collaboration features (permission-aware editing, version retention, DOCX redlining with real-time presence), and AI Document Chat on Azure Container Apps. Day to day I build .NET Web API services on SQL Server with Entity Framework, build Angular record grids with SlickGrid and Kendo UI, refactored a 1,000-line event search service, and resolved a production crash caused by broken pooled database connections across seven controllers.',
    chips: [
      'C#',
      '.NET 8',
      'ASP.NET Web API',
      'Entity Framework Core',
      'Blazor',
      'Angular',
      'SQL Server',
      'Microsoft Azure',
      'Docker',
      'GitHub Actions',
    ],
  },
  {
    id: 'livinghub',
    title: 'Software Engineer, then Software Consultant (Part-Time)',
    company: 'LivingHub Technologies',
    logoUrl: '/logos/livinghub.png',
    logoAlt: 'LivingHub Technologies Logo',
    sectorTag:
      'PropTech & FinTech SaaS · Smart Housing Society Accounting, Utility Billing ERP & Google Play Mobile App',
    employmentType: 'Full-time, then Part-time',
    dates: 'Jan 2023 – Present',
    location: 'Dhaka, Bangladesh',
    summaryHtml:
      'Co-built the .NET 6 CQRS back end of <strong>LivingHub</strong> (livinghub.tech / livinghubcorp.com) on PostgreSQL and EF Core—a PropTech and FinTech ERP that automates smart housing society accounting, treasurer cash/receivable/payable dashboards, recurring monthly service-charge billing, at-actual utility expense splitting (electricity, water, generator fuel), staff payroll, and 1-click digital tenant police verification. Automated recurring billing and due alerts with Hangfire background jobs, containerized the platform with Docker and Docker Compose behind Nginx on Linux, built the Angular portal with Kendo UI and the public marketing website with SEO metadata, and serve as sole maintainer of the <strong>LivingHub Flutter mobile app on Google Play</strong> (shipping Android 16 compliance, HTML printing support, and consolidated report downloads). Also diagnosed and fixed an EF Core DbContext connection-pool lifetime bug across seven API controllers.',
    chips: [
      '.NET 6',
      'CQRS',
      'PostgreSQL',
      'EF Core',
      'Hangfire',
      'Docker Compose',
      'Nginx',
      'Linux',
      'Angular',
      'Flutter (Google Play)',
    ],
  },
  {
    id: 'global-software-architects',
    title: 'Software Engineer · Junior Software Engineer',
    company: 'Global Software Architects (GSA)',
    logoUrl: '/logos/gsa.png',
    logoAlt: 'Global Software Architects Logo',
    sectorTag:
      'GPS Fleet Telematics (AutoGuard VTS) & US Live Touring Special-Effects Operations (Strictly FX)',
    dates: 'Oct 2020 – Jan 2023',
    location: 'Dhaka, Bangladesh',
    summaryHtml:
      'Built the reporting back end and mobile REST APIs of <strong>AutoGuard Tracking</strong> (autoguardtracking.com), a BTRC-licensed live GPS vehicle tracking and corporate fleet management system, on .NET Framework Web API and ADO.NET. Authored complex T-SQL stored procedures with loops and PIVOT tables powering on-demand and scheduled Excel/PDF fleet reports (driver performance, driving hours, fuel usage, stop time, distance traveled, and harsh braking/cornering/acceleration alerts). Built ASP.NET MVC and Web Forms modules and Web API endpoints for <strong>Strictly FX</strong> (USA) to manage arena tour schedules, pyrotechnic/laser gear logistics, crew rosters, and regulatory permits; maintained a C# Windows Forms desktop app and Windows Services extending Microsoft Dynamics; migrated services to ASP.NET Core; and integrated licensed Google Maps, push notifications, SMS, and Mailgun. Promoted to Software Engineer in Nov 2022: tuned slow production queries, configured SQL Server Agent jobs, reviewed pull requests, and mentored junior developers.',
    chips: [
      'C#',
      '.NET Framework',
      'ASP.NET Core',
      'ADO.NET',
      'T-SQL',
      'ASP.NET MVC',
      'Web Forms',
      'Windows Forms',
      'Windows Services',
      'Angular',
    ],
  },
];
