import { ContactContent, HeroContent, Profile } from '../models/profile.model';

export const PROFILE: Profile = {
  name: 'Mahfozur Rahman',
  role: 'Full-Stack .NET & Angular Developer',
  email: 'mahfozmt@gmail.com',
  cvFile: 'Mahfozur_Rahman_CV.pdf',
  cvDownloadName: 'Resume of Mahfozur Rahman-2026.pdf',
  photoFile: 'photo.jpg',
  photoAlt: 'Portrait photo of Mahfozur Rahman',
  linkedInUrl: 'https://www.linkedin.com/in/mahfozmt',
  gitHubUrl: 'https://github.com/mahfozmt',
};

export const HERO: HeroContent = {
  statusText: 'Available for high-impact roles',
  locationBadge: '📍 Dhaka, Bangladesh',
  headlineStart: 'Engineering ',
  headlineHighlight: 'Enterprise SaaS',
  headlineEnd: ' & Cloud Systems',
  subhead: 'Full-Stack .NET & Angular Developer · 6+ Years Experience',
  leadHtml:
    'I specialize in architecting, building, and scaling resilient multi-tenant cloud platforms using <strong>.NET 8 / ASP.NET Core, C#, Angular, SQL Server, and Microsoft Azure</strong>. Currently driving full-stack features, security engineering (2FA, HIPAA compliance), and CI/CD pipelines for <strong>BizTRAQ</strong>, serving US enterprise clients across healthcare, logistics, and case management. I started on <strong>.NET Framework, ADO.NET, and T-SQL stored procedures</strong>, and today I use AI coding agents daily while planning, reviewing, and testing every change myself.',
  cardChips: ['.NET 8', 'C#', 'Angular', 'SQL Server', 'Azure', 'CQRS', 'T-SQL'],
  stats: [
    {
      prefix: '6',
      highlight: '+',
      label: 'Years of Experience',
      sub: 'Enterprise full-stack engineering',
    },
    {
      prefix: '4',
      highlight: '+',
      label: 'Major Platforms',
      sub: 'Built and supported in production',
    },
    {
      prefix: 'MCP',
      label: 'Microsoft Certified',
      sub: 'Professional (Exam 70-486)',
    },
    {
      prefix: 'US ',
      highlight: '&',
      suffix: ' BD',
      label: 'Global Production Impact',
      sub: 'Healthcare HIPAA, logistics & fleet',
    },
  ],
};

export const CONTACT: ContactContent = {
  statusText: 'Open to Opportunities',
  headingId: 'contact-heading',
  heading: "Let's build something exceptional together",
  paragraph:
    "I am open to senior full-stack roles, contract consulting, and enterprise cloud architecture projects. Whether you need to scale an existing SaaS, migrate legacy systems to .NET 8 / Angular, or architect a brand-new cloud product from scratch—let's talk.",
  emailButtonLabel: 'Send Email Directly',
  copyButtonLabel: `Copy ${PROFILE.email}`,
  links: [
    { icon: 'mail', label: PROFILE.email, href: `mailto:${PROFILE.email}`, external: false },
    {
      icon: 'linkedin',
      label: 'linkedin.com/in/mahfozmt',
      href: PROFILE.linkedInUrl,
      external: true,
    },
    { icon: 'github', label: 'github.com/mahfozmt', href: PROFILE.gitHubUrl, external: true },
    {
      icon: 'download',
      label: 'Download Resume (PDF)',
      href: PROFILE.cvFile,
      external: false,
      download: PROFILE.cvDownloadName,
    },
  ],
};
