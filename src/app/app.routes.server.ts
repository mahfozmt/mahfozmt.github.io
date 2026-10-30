import { RenderMode, ServerRoute } from '@angular/ssr';

/** The site is one page, rendered to static HTML at build time so crawlers need no JavaScript. */
export const serverRoutes: ServerRoute[] = [{ path: '**', renderMode: RenderMode.Prerender }];
