import { ExperienceEntry } from '../models/experience.model';
import { SectionHeading } from '../models/section-heading.model';

export const EXPERIENCE_SECTION: SectionHeading = {
  headingId: 'exp-heading',
  eyebrow: 'Career Path',
  title: 'Professional Experience',
  description:
    'Six continuous years of full-stack engineering across product companies and international enterprise clients.',
};

export const EXPERIENCE: readonly ExperienceEntry[] = [
  {
    id: 'cobait',
    title: 'Software Developer',
    company: 'COBAIT',
    employmentType: 'Full-time',
    dates: 'Aug 2023 – Present',
    location: 'Dhaka (Hybrid)',
    current: true,
    summaryHtml:
      'Full-stack developer on <strong>BizTRAQ</strong>, a multi-tenant platform on Microsoft Azure that manages documents, records, and workflows for US businesses in healthcare (HIPAA), fuel distribution, and case management. Built two-factor authentication, the .NET 8 Blazor document service (Docker, GitHub Actions CI/CD to Azure with OpenID Connect), BizDRIVE document features (permission-aware editing, versioning, DOCX redlining with real-time presence), and the LLM-powered AI Document Chat. Day to day I build .NET Web API services on SQL Server with Entity Framework and Angular record grids with Kendo UI and SlickGrid, and I fixed a production crash caused by broken pooled database connections.',
    chips: ['C#', '.NET 8', 'ASP.NET Web API', 'Angular', 'Azure', 'Docker', 'SQL Server', 'CI/CD'],
  },
  {
    id: 'livinghub',
    title: 'Software Engineer, then Software Consultant',
    company: 'LivingHub Technologies',
    employmentType: 'Hybrid / Part-time',
    dates: 'Jan 2023 – Present',
    location: 'Mohakhali DOHS, Dhaka',
    summaryHtml:
      'Co-built the .NET 6 back end of LivingHub, a building utility-management SaaS, with a small team, on PostgreSQL and EF Core using CQRS. Automated recurring updates and notifications with Hangfire, containerized the platform with Docker behind Nginx on Linux, and built the mobile-responsive Angular front end (along with a lightweight Flutter WebView wrapper on Google Play). Since Aug 2023, a part-time consultant for architecture guidance, enhancements, and production support.',
    chips: ['.NET 6', 'CQRS', 'PostgreSQL', 'Docker Compose', 'Nginx', 'Linux'],
  },
  {
    id: 'global-software-architects',
    title: 'Software Engineer · Junior Software Engineer (.NET)',
    company: 'Global Software Architects',
    dates: 'Oct 2020 – Jan 2023',
    location: 'Dhaka',
    summaryHtml:
      'Where my career started, on legacy .NET. Built the reporting back end of <strong>AutoGuard Tracking</strong>, a live GPS vehicle tracking system, on .NET Framework Web API and ADO.NET, and wrote the stored procedures behind its fleet reports, such as fuel consumption and distance driven, using complex T-SQL with loops and PIVOT, debugged by hand. Built ASP.NET MVC and Web Forms modules for <strong>Strictly FX</strong> (USA), maintained a C# Windows Forms desktop application and Windows Services, built front-end features with Angular, Kendo jQuery UI, and Backbone.js, moved existing .NET services to ASP.NET Core, and integrated Google Maps, FCM push, Twilio SMS, and Mailgun. Promoted to Software Engineer in Nov 2022: tuned production queries, set up SQL Server Agent jobs, reviewed pull requests, and mentored junior developers.',
    chips: [
      'C#',
      '.NET Framework',
      'ADO.NET',
      'T-SQL',
      'ASP.NET MVC',
      'Web Forms',
      'Windows Forms',
    ],
  },
];
