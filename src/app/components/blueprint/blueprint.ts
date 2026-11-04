import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';

export interface ArchitectureNode {
  id: number;
  code: string;
  name: string;
  badge: string;
  highlight: string;
  icon: string;
  protocol: string;
  title: string;
  description: string;
  metric1Label: string;
  metric1Val: string;
  metric2Label: string;
  metric2Val: string;
  metric3Label: string;
  metric3Val: string;
  logs: { time: string; level: 'INF' | 'DBG' | 'OK'; text: string }[];
}

const ARCHITECTURE_NODES: ArchitectureNode[] = [
  {
    id: 1,
    code: 'NODE_01 // EDGE',
    name: 'Angular Client',
    badge: 'Signals + Standalone',
    highlight: 'SlickGrid & Kendo',
    icon: 'devices',
    protocol: 'HTTP/2 TLS 1.3 • WebSockets',
    title: 'Angular Client Tier: Standalone Architecture & Fine-Grained Reactivity',
    description:
      'Engineered without legacy NgModules. Employs Angular Signals for sub-tree reactivity and deterministic change detection (ChangeDetectionStrategy.OnPush). Includes high-density SlickGrid and Kendo UI data tables, typed HTTP interceptors with auth token management, and RxJS data streams.',
    metric1Label: 'CHANGE DETECTION',
    metric1Val: 'Signals + OnPush',
    metric2Label: 'ENTERPRISE GRIDS',
    metric2Val: 'SlickGrid & Kendo UI',
    metric3Label: 'COMPONENT MODEL',
    metric3Val: '100% Standalone',
    logs: [
      { time: '00:00:00.012', level: 'INF', text: 'Angular Signals reactive state tree mounted.' },
      { time: '00:00:00.045', level: 'INF', text: 'Bearer Token attached via AuthInterceptor.' },
      {
        time: '00:00:00.089',
        level: 'DBG',
        text: 'SlickGrid virtual rendering initialized (15,000 records).',
      },
      {
        time: '00:00:00.112',
        level: 'INF',
        text: 'Dispatching SearchQuery to RecordSearchEngine.',
      },
      { time: '00:00:00.140', level: 'OK', text: '200 OK Response streamed (filtered 24 rows).' },
    ],
  },
  {
    id: 2,
    code: 'NODE_02 // GATEWAY',
    name: 'API Gateway & Auth',
    badge: 'ASP.NET Core Web API',
    highlight: '2FA & Lockout Policy',
    icon: 'shield',
    protocol: 'OpenID Connect • Azure AD B2C',
    title: 'API Gateway & Multi-Tenant Security Posture',
    description:
      'Centralized ingress controller providing JWT validation, tenant isolation middleware, and multi-channel Two-Factor Authentication (SMS & Email OTP). Enforces a 5-attempt lockout policy with a 30-second cooldown and automated Playwright E2E verification.',
    metric1Label: 'AUTH PROTOCOL',
    metric1Val: 'OIDC / JWT Bearer',
    metric2Label: '2FA POLICY',
    metric2Val: '5-Attempt Lockout',
    metric3Label: 'CI/CD AUTH',
    metric3Val: 'Azure OIDC Federation',
    logs: [
      {
        time: '00:00:00.010',
        level: 'INF',
        text: 'Inbound request evaluated by TenantResolutionMiddleware.',
      },
      {
        time: '00:00:00.024',
        level: 'INF',
        text: 'TwoFactorService: OTP validated with SHA-256 hash.',
      },
      {
        time: '00:00:00.038',
        level: 'DBG',
        text: 'Rate limit bucket verified (token refill nominal).',
      },
      {
        time: '00:00:00.055',
        level: 'OK',
        text: 'Authorized principal claims forwarded to ApplicationCore.',
      },
    ],
  },
  {
    id: 3,
    code: 'NODE_03 // DISPATCH',
    name: 'Application Core',
    badge: 'MediatR CQRS',
    highlight: 'RecordSearchEngine',
    icon: 'memory',
    protocol: 'In-Memory Pipeline • FluentValidation',
    title: 'Decoupled CQRS Handlers & Refactored Query Engines',
    description:
      'Commands and queries are completely segregated via MediatR pipelines. Modularized the legacy 1,000-line monolithic event search into dedicated query, filter, sort, and permission handlers (RecordSearchEngine), drastically reducing cyclomatic complexity.',
    metric1Label: 'PATTERN',
    metric1Val: 'CQRS with MediatR',
    metric2Label: 'SEARCH ENGINE',
    metric2Val: 'RecordSearchEngine',
    metric3Label: 'PIPELINE',
    metric3Val: 'Validation & Audit',
    logs: [
      {
        time: '00:00:00.005',
        level: 'INF',
        text: 'Mediator resolving command handler for EventSearchQuery.',
      },
      {
        time: '00:00:00.018',
        level: 'DBG',
        text: 'EventFilterBuilder: applying tenant-scoped predicates.',
      },
      {
        time: '00:00:00.031',
        level: 'INF',
        text: 'EventPermissionHandler: record access group filter applied.',
      },
      { time: '00:00:00.045', level: 'OK', text: 'Query plan compiled and dispatched to EF Core.' },
    ],
  },
  {
    id: 4,
    code: 'NODE_04 // ASYNC',
    name: 'Async Workers',
    badge: 'Hangfire + Docker Blazor',
    highlight: 'Recurring Cron & OCR',
    icon: 'sync',
    protocol: 'Docker • Azure Container Apps',
    title: 'Background Schedulers & Isolated Blazor Document Microservices',
    description:
      'Automates scheduled data processing and billing routines using Hangfire background queues. Houses an isolated .NET 8 Blazor document processing container (Telerik SuperDoc & LibreOffice) performing OCR, PDF generation, and DOCX redlining without burdening the primary API.',
    metric1Label: 'JOB ENGINE',
    metric1Val: 'Hangfire Queues',
    metric2Label: 'MICROSERVICE',
    metric2Val: 'Dockerized Blazor',
    metric3Label: 'OCR RUNTIME',
    metric3Val: 'Tesseract OCR',
    logs: [
      {
        time: '00:00:00.002',
        level: 'INF',
        text: 'Hangfire scheduler: periodic maintenance billing triggered.',
      },
      {
        time: '00:00:00.040',
        level: 'INF',
        text: 'DocumentService: PDF/A generation job enqueued.',
      },
      { time: '00:00:00.088', level: 'DBG', text: 'Tesseract OCR worker completed scan parsing.' },
      {
        time: '00:00:00.102',
        level: 'OK',
        text: 'Output document committed to Azure Blob Storage.',
      },
    ],
  },
  {
    id: 5,
    code: 'NODE_05 // STORE',
    name: 'Data & Azure Cloud',
    badge: 'SQL Server & Azure Blob',
    highlight: 'SP / App Service',
    icon: 'database',
    protocol: 'T-SQL • ADO.NET / EF Core',
    title: 'Relational Data Tier, High-Speed Stored Procedures & Cloud Storage',
    description:
      'High-performance SQL Server architecture with tuned indexes, complex stored procedures utilizing loops and PIVOT queries for vehicle telemetry, and safe connection recovery logic eliminating shared static DbContext crashes across 7 controllers.',
    metric1Label: 'RDBMS',
    metric1Val: 'SQL Server & Postgres',
    metric2Label: 'RECOVERY',
    metric2Val: 'Safe Rollbacks',
    metric3Label: 'CLOUD HOSTING',
    metric3Val: 'Microsoft Azure',
    logs: [
      {
        time: '00:00:00.008',
        level: 'INF',
        text: 'DbConnectionRecovery: pool healthy, shared DbContext removed.',
      },
      {
        time: '00:00:00.021',
        level: 'DBG',
        text: 'Executing stored procedure with PIVOT trip analytics.',
      },
      {
        time: '00:00:00.043',
        level: 'INF',
        text: 'Safe transaction rollback committed across 7 controllers.',
      },
      {
        time: '00:00:00.062',
        level: 'OK',
        text: 'Blob reference persisted with access policy signature.',
      },
    ],
  },
];

@Component({
  selector: 'app-architecture-blueprint',
  imports: [],
  templateUrl: './blueprint.html',
  styleUrl: './blueprint.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ArchitectureBlueprint {
  protected readonly nodes = ARCHITECTURE_NODES;
  protected readonly selectedId = signal<number>(1);

  protected readonly activeNode = computed(() => {
    const id = this.selectedId();
    return this.nodes.find((n) => n.id === id) ?? this.nodes[0];
  });

  protected selectNode(id: number): void {
    this.selectedId.set(id);
  }
}
