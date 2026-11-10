import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';

export interface ArchitectureNode {
  id: number;
  tierNumber: string;
  name: string;
  badge: string;
  highlight: string;
  icon: 'devices' | 'shield' | 'memory' | 'sync' | 'database';
  protocol: string;
  title: string;
  description: string;
  metric1Label: string;
  metric1Val: string;
  metric2Label: string;
  metric2Val: string;
  metric3Label: string;
  metric3Val: string;
  contracts: { title: string; desc: string }[];
  codeFile: string;
  codeLines: string[];
  logs: { time: string; level: 'INF' | 'DBG' | 'OK'; text: string }[];
}

const ARCHITECTURE_NODES: ArchitectureNode[] = [
  {
    id: 1,
    tierNumber: 'Tier 01 // Client',
    name: 'Angular Client',
    badge: 'Standalone & Signals',
    highlight: 'SlickGrid & Kendo',
    icon: 'devices',
    protocol: 'HTTP/2 TLS 1.3 • WebSockets',
    title: 'Angular Client Tier: Standalone Architecture & Fine-Grained Reactivity',
    description:
      'Engineered without legacy NgModules. Employs Angular Signals for sub-tree reactivity and deterministic change detection (ChangeDetectionStrategy.OnPush). Includes high-density SlickGrid and Kendo UI data tables, typed HTTP interceptors with auth token management, and RxJS data streams.',
    metric1Label: 'Component Model',
    metric1Val: '100% Standalone',
    metric2Label: 'Reactivity Engine',
    metric2Val: 'Angular Signals',
    metric3Label: 'Data Grids',
    metric3Val: 'SlickGrid & Kendo',
    contracts: [
      {
        title: 'Token Injector Interceptors',
        desc: 'Automatic Bearer token attachment with 401 refresh token retry pipeline.',
      },
      {
        title: 'OnPush Change Detection',
        desc: 'Enforced immutability on domain inputs to suppress extraneous dirty checks.',
      },
      {
        title: 'Typed Form Control Boundaries',
        desc: 'Strict compile-time validation contracts preventing form mutation bugs.',
      },
    ],
    codeFile: 'record-search.store.ts',
    codeLines: [
      'readonly query = signal<SearchFilter>(DEFAULT_FILTER);',
      'readonly records = rxResource({',
      '  request: () => this.query(),',
      '  loader: ({ request }) => this.api.searchRecords(request)',
      '});',
    ],
    logs: [
      { time: '00:00:00.012', level: 'INF', text: 'Angular Signals reactive state tree mounted.' },
      { time: '00:00:00.045', level: 'INF', text: 'Bearer Token attached via AuthInterceptor.' },
      {
        time: '00:00:00.089',
        level: 'DBG',
        text: 'SlickGrid virtual rendering initialized (15,000 records).',
      },
      { time: '00:00:00.140', level: 'OK', text: '200 OK Response streamed (filtered 24 rows).' },
    ],
  },
  {
    id: 2,
    tierNumber: 'Tier 02 // Gateway',
    name: 'API Gateway & Auth',
    badge: 'ASP.NET Core Web API',
    highlight: '2FA & Lockout Policy',
    icon: 'shield',
    protocol: 'OpenID Connect • Azure AD B2C',
    title: 'API Gateway & Multi-Tenant Security Posture',
    description:
      'Centralized ingress controller providing JWT validation, tenant isolation middleware, and multi-channel Two-Factor Authentication (SMS & Email OTP). Enforces a 5-attempt lockout policy with a 30-second cooldown and automated Playwright E2E verification.',
    metric1Label: 'Security Lockout',
    metric1Val: '5-Attempt Barrier',
    metric2Label: 'Auth Tokens',
    metric2Val: 'OIDC / JWT Bearer',
    metric3Label: 'Automated Tests',
    metric3Val: 'Playwright E2E',
    contracts: [
      {
        title: 'Rate-Limiting Middleware',
        desc: 'Sliding window token bucket rate limiting on authentication routes.',
      },
      {
        title: 'Security Headers Policy',
        desc: 'Strict Content-Security-Policy (CSP), HSTS, and X-Content-Type-Options.',
      },
      {
        title: 'Zero Secret In-Code',
        desc: 'Azure Key Vault integration with managed identity injection at startup.',
      },
    ],
    codeFile: 'TwoFactorAuthService.cs',
    codeLines: [
      'if (attempt.FailedCount >= MaxAttempts && !attempt.CooldownExpired)',
      '    return AuthResult.LockedOut(retryAfterSeconds: 30);',
      'var verified = CryptographicOperations.FixedTimeEquals(hash, expected);',
      'await _auditLogger.RecordSecurityEventAsync(user.TenantId, verified);',
    ],
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
        time: '00:00:00.055',
        level: 'OK',
        text: 'Authorized principal claims forwarded to ApplicationCore.',
      },
    ],
  },
  {
    id: 3,
    tierNumber: 'Tier 03 // Domain',
    name: 'Application Core',
    badge: 'MediatR CQRS',
    highlight: 'RecordSearchEngine',
    icon: 'memory',
    protocol: 'In-Memory Pipeline • FluentValidation',
    title: 'Decoupled CQRS Handlers & Refactored Query Engines',
    description:
      'Commands and queries are completely segregated via MediatR pipelines. Modularized the legacy 1,000-line monolithic event search into dedicated query, filter, sort, and permission handlers (RecordSearchEngine), drastically reducing cyclomatic complexity.',
    metric1Label: 'Dispatch Pipeline',
    metric1Val: 'MediatR CQRS',
    metric2Label: 'Search Engine',
    metric2Val: 'RecordSearchEngine',
    metric3Label: 'Validation',
    metric3Val: 'FluentValidation',
    contracts: [
      {
        title: 'Pipeline Behaviors',
        desc: 'Automated transaction demarcation, logging, and validation wrappers.',
      },
      {
        title: 'Domain Model Purity',
        desc: 'Zero dependencies on ASP.NET Core web host assemblies in domain projects.',
      },
      {
        title: 'Unit Test Isolation',
        desc: '100% testable query handlers with mocked repository interfaces.',
      },
    ],
    codeFile: 'RecordSearchEngine.cs',
    codeLines: [
      'var spec = _filterBuilder.BuildTenantPredicate(request.TenantId, request.Criteria);',
      'var aclScope = await _permissionHandler.ResolveAccessGroupsAsync(user, ct);',
      'return await _queryExecutor.StreamProjectedPageAsync(spec.And(aclScope), ct);',
    ],
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
      { time: '00:00:00.045', level: 'OK', text: 'Query plan compiled and dispatched to EF Core.' },
    ],
  },
  {
    id: 4,
    tierNumber: 'Tier 04 // Workers',
    name: 'Async Workers',
    badge: 'Hangfire + Docker Blazor',
    highlight: 'Recurring Cron & OCR',
    icon: 'sync',
    protocol: 'Docker • Azure Container Apps',
    title: 'Background Schedulers & Isolated Blazor Document Microservices',
    description:
      'Automates scheduled data processing and billing routines using Hangfire background queues. Houses an isolated .NET 8 Blazor document processing container (Telerik SuperDoc & LibreOffice) performing OCR, PDF generation, and DOCX redlining without burdening the primary API.',
    metric1Label: 'Job Scheduler',
    metric1Val: 'Hangfire Queues',
    metric2Label: 'Container Runtime',
    metric2Val: 'Dockerized Blazor',
    metric3Label: 'Document OCR',
    metric3Val: 'Tesseract Engine',
    contracts: [
      {
        title: 'Idempotent Job Handlers',
        desc: 'Safe automatic retry semantics without duplicate billing or state corruption.',
      },
      {
        title: 'Process Sandboxing',
        desc: 'Heavy LibreOffice/OCR memory workloads isolated in dedicated containers.',
      },
      {
        title: 'Dead-Letter Queueing',
        desc: 'Structured failure telemetry with manual replay hooks for operations.',
      },
    ],
    codeFile: 'DocumentOcrWorker.cs',
    codeLines: [
      '[Queue("critical-docs"), AutomaticRetry(Attempts = 3)]',
      'public async Task ProcessRedlineAndOcrAsync(Guid docId, CancellationToken ct)',
      '{',
      '    await using var stream = await _blobStore.OpenReadAsync(docId, ct);',
      '    var ocrText = await _tesseractEngine.ExtractStructuredTextAsync(stream, ct);',
      '}',
    ],
    logs: [
      {
        time: '00:00:00.002',
        level: 'INF',
        text: 'Hangfire scheduler: periodic maintenance billing triggered.',
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
    tierNumber: 'Tier 05 // Persistence',
    name: 'Data & Azure Cloud',
    badge: 'SQL Server & Azure Blob',
    highlight: 'SP / App Service',
    icon: 'database',
    protocol: 'T-SQL • ADO.NET / EF Core',
    title: 'Relational Data Tier, High-Speed Stored Procedures & Cloud Storage',
    description:
      'High-performance SQL Server architecture with tuned indexes, complex stored procedures utilizing loops and PIVOT queries for vehicle telemetry, and safe connection recovery logic eliminating shared static DbContext crashes across 7 controllers.',
    metric1Label: 'Primary RDBMS',
    metric1Val: 'SQL Server & Postgres',
    metric2Label: 'Connection Pool',
    metric2Val: 'Safe Rollback Guard',
    metric3Label: 'Cloud Platform',
    metric3Val: 'Microsoft Azure',
    contracts: [
      {
        title: 'Scoped DbContext Discipline',
        desc: 'Zero static database contexts; connections returned to pool immediately.',
      },
      {
        title: 'Analytical Window Functions',
        desc: 'Odometer calculations done in single SQL execution plans via LEAD/LAG.',
      },
      {
        title: 'Temporal Table Auditing',
        desc: 'Automatic system-versioned history tracking for healthcare and financial rows.',
      },
    ],
    codeFile: 'DbConnectionRecovery.cs',
    codeLines: [
      'await using var tx = await _dbContext.Database.BeginTransactionAsync(ct);',
      'try {',
      '    var result = await _spExecutor.QueryPivotTelemetryAsync(vehicleId, ct);',
      '    await tx.CommitAsync(ct); return result;',
      '} catch { await tx.RollbackAsync(ct); throw; }',
    ],
    logs: [
      {
        time: '00:00:00.008',
        level: 'INF',
        text: 'DbConnectionRecovery: pool healthy, shared DbContext removed.',
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

  protected stepNextNode(): void {
    const next = (this.selectedId() % this.nodes.length) + 1;
    this.selectedId.set(next);
  }
}
