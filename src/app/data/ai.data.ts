import { AiCard } from '../models/ai.model';
import { SectionHeading } from '../models/section-heading.model';

export const AI_SECTION: SectionHeading = {
  headingId: 'ai-heading',
  eyebrow: 'AI-Assisted Engineering',
  title: 'Engineer-Led, AI-Assisted',
  description:
    'Coding agents make me faster, but I stay in control of every change. I also build LLM features into production SaaS.',
};

export const AI_CARDS: readonly AiCard[] = [
  {
    title: 'How I Work With Coding Agents',
    badge: 'Daily Workflow',
    description:
      "I use Claude Code and Google Antigravity daily at COBAIT and LivingHub for implementation, refactoring, tests, and documentation. I plan each task, read every diff, debug the result myself, and reject what is wrong. Years of hand-written .NET and T-SQL are what let me check an agent's work instead of trusting it blindly.",
    chips: [
      'Claude Code',
      'Google Antigravity',
      'Human-Reviewed Agentic Coding',
      'Prompt Engineering',
    ],
  },
  {
    title: 'BizTRAQ AI Document Chat',
    badge: 'LLM Integration',
    description:
      "An LLM-powered assistant for document summarization and Q&A that I built end to end. The Angular chat panel handles sessions, suggested prompts, and an OCR step for scanned files. The .NET Web API checks BizDRIVE permissions, keeps every request inside one customer's data, and forwards the document to an LLM agent service.",
    flow: {
      label: 'Request Flow',
      nodes: [
        'Angular Chat Panel',
        '.NET Web API (Permission + Tenant Check)',
        'LLM Agent Service (Azure Container Apps)',
      ],
    },
    chips: ['LLM API Integration', 'Angular', 'ASP.NET Web API', 'Azure Container Apps', 'OCR'],
  },
];
