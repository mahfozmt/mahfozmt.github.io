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
  statusText: 'Open to Full-Stack .NET & Angular Roles',
  locationBadge: 'Dhaka, Bangladesh',
  headlineStart: 'Building ',
  headlineHighlight: 'Enterprise SaaS',
  headlineEnd: ' & Production Systems',
  subhead: 'Full-Stack .NET & Angular Developer · 6+ Years of Experience',
  leadHtml:
    'Full-stack .NET and Angular developer with 6+ years of experience building and supporting production software for clients in the US and Bangladesh. Started on <strong>.NET Framework, ADO.NET, and T-SQL stored procedures</strong>, and now build multi-tenant SaaS with <strong>.NET 8, Angular, SQL Server, and Microsoft Azure</strong> on <strong>BizTRAQ</strong>—taking features from database design and APIs through the user interface, CI/CD, and production support. I use AI coding agents daily to work faster, while planning, reviewing, and testing every change personally. Microsoft Certified Professional (MCP).',
  cardChips: ['.NET 8', 'C#', 'Angular', 'SQL Server', 'Azure', 'CQRS', 'T-SQL'],
  stats: [
    {
      prefix: '6',
      highlight: '+',
      label: 'Years of Experience',
      sub: 'From .NET Framework & T-SQL to .NET 8, Angular & Azure',
    },
    {
      prefix: '4',
      highlight: '+',
      label: 'Production Platforms',
      sub: 'BizTRAQ, LivingHub, AutoGuard Tracking & Strictly FX',
    },
    {
      prefix: 'MCP',
      label: 'Microsoft Certified',
      sub: 'Passed Exam 70-486: ASP.NET MVC Web Applications (score 933)',
    },
    {
      prefix: 'US ',
      highlight: '&',
      suffix: ' BD',
      label: 'Client Delivery',
      sub: 'Healthcare (HIPAA), fuel distribution, fleet GPS & property SaaS',
    },
  ],
};

export const CONTACT: ContactContent = {
  statusText: 'Open to Opportunities',
  headingId: 'contact-heading',
  heading: "Let's discuss your next engineering role or project",
  paragraph:
    'I am open to full-stack .NET and Angular roles, remote or hybrid opportunities, and consulting engagements. Whether you are scaling a multi-tenant SaaS on Azure, modernizing a legacy .NET Framework and T-SQL application, or shipping new product features end to end—feel free to reach out.',
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
