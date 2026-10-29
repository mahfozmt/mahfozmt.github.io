import { CaseStudy, FilterOption } from '../models/case-study.model';
import { SectionHeading } from '../models/section-heading.model';

export const WORK_SECTION: SectionHeading = {
  headingId: 'work-heading',
  eyebrow: 'Enterprise Engineering',
  title: 'Selected Production Systems',
  description:
    "Deep dive into multi-tenant SaaS products, distributed architectures, and mission-critical systems I've engineered and scaled.",
};

export const CASE_FILTERS: readonly FilterOption[] = [
  {
    id: 'all',
    label: 'All Projects',
  },
  {
    id: 'saas',
    label: 'Cloud SaaS & Multi-Tenant',
  },
  {
    id: 'architecture',
    label: 'CQRS & Architecture',
  },
  {
    id: 'mobile-iot',
    label: 'IoT & Mobile',
  },
];

export const CASE_STUDIES: readonly CaseStudy[] = [
  {
    id: 'biztraq',
    title: 'BizTRAQ: Enterprise Business Information Platform',
    company: 'COBAIT',
    period: 'Aug 2023 – Present',
    site: {
      label: 'biztraq.com',
      url: 'https://biztraq.com',
    },
    badge: 'Healthcare HIPAA · Multi-Tenant Cloud',
    categories: ['saas'],
    scope:
      'A comprehensive, high-security multi-tenant cloud platform deployed on Microsoft Azure. BizTRAQ unifies document lifecycle management, compliance records, corporate communication, and workflow automation for US enterprise clients in healthcare (strict HIPAA regulations), fuel distribution, and legal case management—displacing disparate tools like SharePoint, OneDrive, and monday.com.',
    highlights: [
      {
        label: 'Record Grids',
        text: 'Built Angular record grids with SlickGrid and Kendo UI: server-side sorting, filtering and pagination, inline and bulk editing, and admin-configurable columns.',
      },
      {
        label: 'Search Refactor',
        text: 'Split the monolithic event search code into separate query, filter, sort, and permission services (about 1,000 lines moved out of one class) and tuned grid search and row-count queries.',
      },
      {
        label: 'Security & 2FA Engineering',
        text: 'Built two-factor authentication (SMS/Email) with hashed six-digit codes, expiry, a five-attempt lockout, a 30-second resend cooldown, per-tenant settings, and a shared-link bypass.',
      },
      {
        label: 'Document Processing Service',
        text: 'Built the .NET 8 Blazor document service (Telerik, SuperDoc) for DOCX and XLSX editing, PPTX viewing, legacy Office formats, Save as PDF, and OCR, containerized with Docker.',
      },
      {
        label: 'Automated DevOps',
        text: 'Created GitHub Actions CI/CD workflows that deploy the document service to Azure using OpenID Connect (OIDC) token federation.',
      },
      {
        label: 'BizDRIVE Documents',
        text: 'Built permission-aware editing, versioning with configurable retention, view-only locking, external sharing, and DOCX redlining with author attribution and real-time presence for multiple editors.',
      },
      {
        label: 'AI Document Chat',
        text: 'Built an LLM-powered assistant for document summarization and Q&A, from the Angular chat panel to a permission-checked, tenant-scoped .NET API that calls an LLM agent service.',
      },
      {
        label: 'Production Stability',
        text: 'Fixed an intermittent crash caused by broken pooled database connections: removed a shared DbContext, added safe rollbacks and connection recovery, and moved large note content to file storage.',
      },
    ],
    architecture: {
      label: 'System Architecture & Data Pipeline',
      nodes: [
        'Angular SPA',
        'Azure App Service / ASP.NET Web API',
        'Isolated SQL Server (Per Tenant)',
        'Azure Blob Storage',
        'Dockerized .NET 8 Blazor Document Service',
      ],
    },
    chips: [
      'C#',
      '.NET 8',
      'ASP.NET Web API',
      'Entity Framework Core',
      'SQL Server',
      'Angular',
      'Kendo UI',
      'SlickGrid',
      'Azure App Service',
      'Azure Blob',
      'Docker',
      'GitHub Actions OIDC',
    ],
  },
  {
    id: 'livinghub',
    title: 'LivingHub: Smart Building Utility Management SaaS',
    company: 'LivingHub Technologies',
    period: 'Jan 2023 – Present',
    site: {
      label: 'livinghub.tech',
      url: 'https://www.livinghub.tech',
    },
    badge: 'Back-End Engineer · CQRS SaaS · Android App',
    categories: ['architecture', 'saas', 'mobile-iot'],
    scope:
      'A modern cloud SaaS built to digitize residential and commercial building management: automated service-charge calculation, utility reconciliation, expense tracking, resident directories, and accounting ledgers, with a companion Android app (a Flutter WebView wrapper) on Google Play.',
    highlights: [
      {
        label: 'CQRS Back End',
        text: 'Co-built the .NET 6 back end with a small team, using Clean Architecture and the CQRS pattern (MediatR) to separate read and write models over PostgreSQL and EF Core.',
      },
      {
        label: 'Background Job Scheduling',
        text: 'Configured Hangfire distributed workers for scheduled bill generation, recurring overdue penalties, SMS reminders, and transaction batching.',
      },
      {
        label: 'Containerized Infrastructure',
        text: 'Containerized all application services via Docker and Docker Compose, deployed securely behind high-performance Nginx reverse proxy on Linux servers.',
      },
      {
        label: 'Responsive Web Portal & WebView App',
        text: 'Developed a mobile-responsive Angular management dashboard with Kendo UI data grids and packaged it into a lightweight Flutter WebView wrapper published on Google Play.',
      },
    ],
    architecture: {
      label: 'System Architecture & Data Pipeline',
      nodes: [
        'Angular Responsive Web',
        'Nginx Reverse Proxy',
        '.NET 6 API (CQRS + MediatR)',
        'PostgreSQL + EF Core',
        'Hangfire Recurring Queue',
      ],
    },
    chips: [
      '.NET 6',
      'C#',
      'CQRS',
      'PostgreSQL',
      'EF Core',
      'Hangfire',
      'Docker Compose',
      'Nginx',
      'Linux',
      'Angular',
    ],
  },
  {
    id: 'autoguard-tracking',
    title: 'AutoGuard Tracking: Real-Time Fleet & Vehicle IoT Tracking',
    company: 'Global Software Architects',
    period: 'Oct 2020 – Jan 2023',
    site: {
      label: 'autoguardtracking.com',
      url: 'https://www.autoguardtracking.com',
    },
    badge: 'Live IoT in Bangladesh · Real-time Telemetry',
    categories: ['mobile-iot', 'architecture'],
    scope:
      'A GPS vehicle tracking system running live in Bangladesh, with web and mobile apps, real-time maps and alerts, and fleet reports such as fuel consumption and distance driven.',
    highlights: [
      {
        label: 'Legacy .NET Back End',
        text: 'Built the reporting back end on .NET Framework Web API and ADO.NET, plus the APIs the mobile app team consumed.',
      },
      {
        label: 'Hand-Written T-SQL',
        text: 'Wrote the stored procedures behind the fleet reports (fuel consumption, distance driven) using complex T-SQL with loops and PIVOT, debugged by hand.',
      },
      {
        label: 'Front End & Integrations',
        text: 'Built features with Angular, Kendo jQuery UI, and Backbone.js, moved existing .NET services to ASP.NET Core, and integrated Google Maps, push notifications, SMS (Twilio), and Mailgun.',
      },
    ],
    chips: [
      'C#',
      'ASP.NET MVC',
      'ASP.NET Web API',
      'SQL Server T-SQL',
      'ADO.NET',
      'Windows Services',
      'Google Maps API',
      'FCM Push',
      'Twilio SMS',
    ],
  },
  {
    id: 'strictly-fx',
    title: 'Enterprise Tour & Event Management Suite: Strictly FX (USA)',
    company: 'Global Software Architects',
    period: 'Oct 2020 – Jan 2023',
    site: {
      label: 'strictlyfx.com',
      url: 'https://www.strictlyfx.com',
    },
    badge: 'US Enterprise Client · Global Tour Logistics',
    categories: ['saas', 'architecture'],
    scope:
      'An enterprise suite built for Strictly FX, a world-touring live special-effects company in the USA, that runs its shows, crew schedules, logistics, and permits.',
    highlights: [
      {
        label: 'Web API & Front End',
        text: 'Built ASP.NET Web API endpoints with Angular 8 and Kendo UI interfaces for scheduling.',
      },
      {
        label: 'Legacy Web Forms',
        text: 'Built and maintained ASP.NET MVC and Web Forms modules on SQL Server with ADO.NET.',
      },
    ],
    chips: [
      'C#',
      'ASP.NET Web API',
      'Angular 8',
      'Kendo UI for Angular',
      'SQL Server',
      'ADO.NET',
      'ASP.NET Web Forms',
    ],
  },
];
