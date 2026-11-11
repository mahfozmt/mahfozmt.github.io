import { CaseStudy, FilterOption } from '../models/case-study.model';
import { SectionHeading } from '../models/section-heading.model';

export const WORK_SECTION: SectionHeading = {
  headingId: 'work-heading',
  eyebrow: 'Production Portfolio & Domain Expertise',
  title: 'Selected Production Systems',
  description:
    'Enterprise SaaS platforms, PropTech/FinTech billing systems, GPS fleet telematics, and live-touring operations suites where I engineered both the core technical architecture and the underlying sector business logic.',
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
    title: 'BizTRAQ: Business Information & Process Automation Platform',
    company: 'COBAIT (for Triulta, Houston, TX)',
    logoUrl: '/logos/biztraq.png',
    logoAlt: 'BizTRAQ Enterprise Platform Logo',
    period: 'Aug 2023 – Present',
    site: {
      label: 'biztraq.com',
      url: 'https://biztraq.com',
    },
    badge: 'Healthcare (HIPAA) · Multi-Tenant Azure SaaS',
    sectorTag:
      'Business Information Platform · CRM, Contract Management, Procurement, HR, Assets, Healthcare (HIPAA) & Fuel Distribution',
    domainFeatures: [
      'BizDRIVE Cloud Storage & Global File Explorer (GFE)',
      'BizTRAQ Libraries (Structured Records, Tickets, Tasks & Audit Trails)',
      'Document Routing & Signing (DRS) & Form-to-PDF Mapping',
      'Native Word/Excel Editing, PDF Redaction & DOCX Redlining',
      'Configurable Workflows for CRM, HR, Procurement & Fuel Distribution',
      'AI Document Insights, OCR & Tenant-Scoped Chat',
    ],
    categories: ['saas', 'architecture'],
    scope:
      'A multi-tenant Business Information Platform on Microsoft Azure built for Triulta (Houston, TX, USA) that replaces disconnected file servers and apps by uniting BizDRIVE cloud file storage, BizTRAQ Libraries (structured records, tickets, notes, and communications), Document Routing & Signing (DRS), and configurable business solutions across healthcare (HIPAA), fuel distribution, construction, legal, CRM, procurement, and HR.',
    highlights: [
      {
        label: 'BizTRAQ Libraries, Dynamic Grids & APIs',
        text: 'Build .NET Web API services on SQL Server with Entity Framework and Angular record grids with SlickGrid and Kendo UI powering configurable CRM, Contract, HR, Asset, and Case Management libraries with server-side sorting, filtering, pagination, inline/bulk editing, and admin-configurable layouts.',
      },
      {
        label: 'Event & Record Search Refactoring',
        text: 'Refactored the monolithic event and library search engine into dedicated query, filter, sort, and role-permission services (moving ~1,000 lines out of a single class) and tuned grid search and row-count queries across multi-tenant records.',
      },
      {
        label: 'Enterprise Security & Two-Factor Authentication',
        text: 'Built two-factor authentication for HIPAA and enterprise compliance: six-digit codes sent via email or SMS and stored hashed, expiration enforcement, a five-attempt lockout, a 30-second resend cooldown, per-tenant security policies, and a shared-link bypass, verified with Playwright E2E tests.',
      },
      {
        label: 'Native Office/PDF Engine & Blazor Document Service',
        text: 'Built the .NET 8 Blazor document service (Telerik, SuperDoc) enabling native DOCX and XLSX editing, PPTX viewing, legacy Office conversions, Save as PDF, and OCR; containerized with Docker and deployed to Azure via GitHub Actions with OpenID Connect.',
      },
      {
        label: 'BizDRIVE & Document Routing Collaboration',
        text: 'Engineered BizDRIVE and Global File Explorer (GFE) collaboration capabilities including permission-aware editing, version history with configurable retention, view-only locking, external sharing, and DOCX redlining with author attribution and real-time multi-editor presence.',
      },
      {
        label: 'AI Document Chat & Contextual Insights',
        text: 'Built AI Document Chat and automated summaries: an Angular chat panel with OCR preprocessing for scanned files, backed by a .NET Web API that enforces BizDRIVE permissions and tenant isolation before calling an LLM agent service on Azure Container Apps.',
      },
      {
        label: 'Database Connection Pool Recovery',
        text: 'Resolved an intermittent production crash caused by exhausted pooled SQL connections: eliminated a shared DbContext instance, added safe transaction rollbacks and connection recovery across seven controllers, and offloaded large note payloads to blob storage.',
      },
    ],
    architecture: {
      label: 'System Architecture & Data Flow',
      nodes: [
        'Angular SPA (BizDRIVE & Libraries)',
        'ASP.NET Web API (Azure App Service)',
        'SQL Server & Azure Blob Storage',
        'Dockerized .NET 8 Blazor Document Service',
        'LLM Agent Service (Azure Container Apps)',
      ],
    },
    chips: [
      'C#',
      '.NET 8',
      'ASP.NET Web API',
      'Entity Framework Core',
      'Blazor',
      'SQL Server',
      'Angular',
      'Kendo UI',
      'SlickGrid',
      'Azure App Service',
      'Azure Container Apps',
      'Docker',
      'GitHub Actions OIDC',
      'Playwright E2E',
    ],
  },
  {
    id: 'livinghub',
    title: 'LivingHub: Smart Housing Society & Building Accounting ERP',
    company: 'LivingHub Technologies',
    logoUrl: '/logos/livinghub.png',
    logoAlt: 'LivingHub Technologies Logo',
    period: 'Jan 2023 – Present',
    site: {
      label: 'livinghub.tech',
      url: 'https://livinghubcorp.com',
    },
    badge: 'PropTech & FinTech CQRS ERP · Google Play App',
    sectorTag:
      'PropTech & FinTech SaaS · Smart Housing Society Billing, Building Utility Automation & Treasurer Accounting ERP',
    domainFeatures: [
      'Smart Treasurer Dashboard (Real-Time Cash, Receivables & Payables)',
      'Zero-Touch Recurring Service-Charge Billing & Auto Due Alerts',
      'At-Actual Utility Split (Common Electricity, Water & Generator Fuel)',
      'Flat-Wise Ledger, Staff Payroll & Digital Payment Receipts',
      'Document Vault (Holding Tax & Licenses) & 1-Click Police Verification',
      'Google Play Flutter App (Consolidated Report Downloads & HTML Print)',
    ],
    categories: ['architecture', 'saas', 'mobile-iot'],
    scope:
      'A cloud-based PropTech and FinTech ERP platform engineered for housing societies, multi-flat apartments, treasurers, and building committees across Bangladesh—replacing manual spreadsheets and paper receipts with automated monthly service-charge billing, at-actual utility expense splitting, real-time treasurer accounting, mobile notice broadcasts, and a published Google Play companion app.',
    highlights: [
      {
        label: 'Treasurer Accounting & CQRS Back End',
        text: 'Co-built the .NET 6 CQRS back end on PostgreSQL and Entity Framework Core, implementing double-entry society accounting, real-time cash/receivables/payables tracking, staff payroll, maintenance expense ledgers, and at-actual utility splitting (common electricity, water, and generator fuel).',
      },
      {
        label: 'Recurring Billing & Hangfire Automation',
        text: 'Automated zero-touch monthly service-charge generation, flat-wise unpaid due alerts, digital receipt issuance, and resident notice broadcasts using Hangfire background jobs.',
      },
      {
        label: 'Google Play Flutter App & Consolidated Reporting',
        text: 'Built the Angular web portal with Kendo UI and serve as sole maintainer of the LivingHub Flutter mobile app on Google Play (com.livinghub.app)—shipping Android 16 Play policy compliance, consolidated financial report downloads, HTML printing support, and 1-click digital tenant police verification forms.',
      },
      {
        label: 'Linux/Docker Deployment & Connection Pool Fix',
        text: 'Containerized the platform with Docker Compose behind Nginx on Linux, built the responsive public marketing platform with SEO metadata, and resolved a database connection-pool bottleneck across seven API controllers caused by EF Core DbContext lifetime misconfiguration.',
      },
    ],
    architecture: {
      label: 'System Architecture & Data Flow',
      nodes: [
        'Angular Portal & Google Play Flutter App',
        'Nginx Reverse Proxy (Linux)',
        '.NET 6 Web API (CQRS)',
        'PostgreSQL & EF Core',
        'Hangfire Billing & Alert Jobs',
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
      'Kendo UI',
      'Flutter (Google Play)',
    ],
  },
  {
    id: 'autoguard-tracking',
    title: 'AutoGuard Tracking: Live GPS Fleet & Vehicle Tracking System',
    company: 'Global Software Architects',
    logoUrl: '/logos/autoguard.png',
    logoAlt: 'AutoGuard Vehicle Tracking System Logo',
    period: 'Oct 2020 – Jan 2023',
    site: {
      label: 'autoguardtracking.com',
      url: 'https://www.autoguardtracking.com',
    },
    badge: 'BTRC-Licensed VTS · Live Google Maps & Fleet Analytics',
    sectorTag:
      'GPS Vehicle Tracking & Corporate Fleet Management · Nationwide Live Mapping, Driver Safety & Scheduled Reporting',
    domainFeatures: [
      'Single-Screen Live Google Mapping (Teknaf to Tetulia Fleet View)',
      'Driver Behavior Detection (Harsh Braking, Cornering & Acceleration)',
      'Street-Level Theft Warning & Geofence Breach Notifications',
      'Fleet Maintenance Alerts by Time, Engine Hours & Mileage',
      'On-Demand & Scheduled Fleet Reports (Excel & PDF Export)',
      'Support Ticketing & External ERP/CRM API Integration',
    ],
    categories: ['mobile-iot', 'architecture'],
    scope:
      'A BTRC-licensed GPS Vehicle Tracking System (VTS) and corporate fleet management platform bringing 14+ years of US telematics experience to Bangladesh—enabling enterprises and vehicle owners to monitor entire fleets on a single live Google Maps screen, track driver safety behavior, schedule preventative maintenance, and generate automated fuel, mileage, and stop-time reports.',
    highlights: [
      {
        label: 'Fleet Reporting Engine & Mobile REST APIs',
        text: 'Built the reporting back end of AutoGuard on .NET Framework Web API and ADO.NET alongside the REST APIs consumed by the smartphone apps and external ERP/CRM integrations for single-screen live fleet tracking, maintenance scheduling (by time, engine hours, and mileage), and customer support ticketing.',
      },
      {
        label: 'Hand-Tuned T-SQL Telematics Stored Procedures',
        text: 'Authored complex T-SQL stored procedures using cursors/loops and PIVOT tables to compute high-volume fleet analytics—including driver performance, driving hours, fuel consumption, ignition stop time, distance traveled, and harsh acceleration/braking/cornering events—with on-demand and scheduled Excel and PDF exports.',
      },
      {
        label: 'Live Google Mapping, ASP.NET Core Migration & Alerts',
        text: 'Built front-end tracking and report scheduler views with Angular, Kendo jQuery UI, and Backbone.js, migrated legacy .NET services to ASP.NET Core, and integrated licensed Google Maps, push notifications, SMS gateways, and Mailgun for real-time theft and geofence alerts.',
      },
    ],
    architecture: {
      label: 'Telematics & Reporting Flow',
      nodes: [
        'GPS VTS Hardware & Mobile Apps',
        'ASP.NET Web API & Core Services',
        'SQL Server (T-SQL PIVOT & Agent Jobs)',
        'Live Google Maps & Alert Dispatch (Push/SMS/Mailgun)',
        'Scheduled Excel & PDF Fleet Reports',
      ],
    },
    chips: [
      'C#',
      '.NET Framework Web API',
      'ASP.NET Core',
      'ADO.NET',
      'T-SQL Stored Procedures',
      'Angular',
      'Kendo UI',
      'Google Maps API',
      'Push Notifications',
      'Mailgun',
    ],
  },
  {
    id: 'strictly-fx',
    title: 'Strictly FX: Live Touring Special Effects Operations Suite (USA)',
    company: 'Global Software Architects',
    logoUrl: '/logos/strictlyfx.svg',
    logoAlt: 'Strictly FX Logo',
    period: 'Oct 2020 – Jan 2023',
    site: {
      label: 'strictlyfx.com',
      url: 'https://www.strictlyfx.com',
    },
    badge: 'US Enterprise Client · Arena Tour & Pyro/Laser Logistics',
    sectorTag:
      'Live Touring Special Effects (500+ Annual Shows) · Pyrotechnics, Lasers, Flame, Cryogenics & Crew Operations',
    domainFeatures: [
      'Worldwide Concert Tour & Stadium Show Scheduling',
      'Pyrotechnics, Flame, Cryogenics, Confetti & Laser Gear Logistics',
      'Crew Roster Assignments & Multi-Jurisdiction Fire/Pyro Permits',
      'C# Windows Forms Desktop & Windows Services for Microsoft Dynamics',
      'Automated Show Manifests & Operations Exports (PDF, CSV & XLSX)',
    ],
    categories: ['saas', 'architecture'],
    scope:
      'An enterprise show-operations and equipment logistics suite built for Strictly FX (Nashville, TN, USA)—the 13-time Parnelli Award-winning live special-effects company powering 500+ arena tours and major broadcasts a year—coordinating pyrotechnics, custom laser systems, flame effects, cryogenics, crew rosters, warehouse logistics, and regulatory permits.',
    highlights: [
      {
        label: 'Show Operations, Crew Rosters & Permit Modules',
        text: 'Built ASP.NET MVC and Web Forms modules and Web API endpoints managing touring show calendars, pyrotechnic and laser equipment allocations, technician crew rosters, shipping logistics, and municipal fire/pyro compliance permits.',
      },
      {
        label: 'Scheduling Views, Dynamics Services & Report Exports',
        text: 'Built interactive Angular and Kendo UI scheduling views, maintained a C# Windows Forms desktop application and background Windows Services extending a Microsoft Dynamics ERP solution, and delivered PDF, CSV, and XLSX operational report exports.',
      },
    ],
    architecture: {
      label: 'Tour Operations & ERP Integration Flow',
      nodes: [
        'Angular & Kendo UI Scheduling Views',
        'ASP.NET MVC, Web Forms & Web API',
        'C# Windows Forms & Windows Services',
        'Microsoft Dynamics & SQL Server',
        'PDF / CSV / XLSX Tour & Permit Exports',
      ],
    },
    chips: [
      'C#',
      'ASP.NET MVC',
      'ASP.NET Web Forms',
      'ASP.NET Web API',
      'Angular',
      'Kendo UI',
      'SQL Server',
      'ADO.NET',
      'Windows Forms',
      'Windows Services',
    ],
  },
];
