import { DOCUMENT } from '@angular/common';
import { ChangeDetectionStrategy, Component, afterNextRender, inject } from '@angular/core';

import { AiSection } from './components/ai-section/ai-section';
import { BackToTop } from './components/back-to-top/back-to-top';
import { CaseStudies } from './components/case-studies/case-studies';
import { Contact } from './components/contact/contact';
import { Credentials } from './components/credentials/credentials';
import { Experience } from './components/experience/experience';
import { Hero } from './components/hero/hero';
import { OpenSource } from './components/open-source/open-source';
import { SiteFooter } from './components/site-footer/site-footer';
import { Skills } from './components/skills/skills';
import { Toast } from './components/toast/toast';
import { TopNav } from './components/top-nav/top-nav';
import { ScrollService } from './services/scroll.service';

@Component({
  selector: 'app-root',
  imports: [
    TopNav,
    Hero,
    CaseStudies,
    Experience,
    AiSection,
    OpenSource,
    Skills,
    Credentials,
    Contact,
    SiteFooter,
    Toast,
    BackToTop,
  ],
  templateUrl: './app.html',
  host: { '(document:click)': 'onDocumentClick($event)' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App {
  private readonly document = inject(DOCUMENT);
  private readonly scroll = inject(ScrollService);

  constructor() {
    // The page is rendered by JavaScript, so the browser cannot jump to a `#section` deep link on
    // its own while loading. Do it once the content exists.
    afterNextRender(() => {
      const id = this.document.location.hash.slice(1);
      if (id) {
        this.scroll.scrollToId(decodeURIComponent(id), 'instant');
      }
    });
  }

  /**
   * In-page links such as `href="#work"` are scrolled to here instead of being left to the browser.
   * index.html declares `<base href="/">`, which makes the browser resolve `#work` to `/#work`; on a
   * URL like `/?utm_source=x` or `/index.html` that would reload the whole page on every click.
   */
  protected onDocumentClick(event: MouseEvent): void {
    if (event.defaultPrevented || event.button !== 0) {
      return;
    }
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) {
      return;
    }
    const anchor = event.target instanceof Element ? event.target.closest('a[href^="#"]') : null;
    const hash = anchor?.getAttribute('href')?.slice(1);
    if (!hash || !this.scroll.scrollToId(decodeURIComponent(hash))) {
      return;
    }
    event.preventDefault();
    const { pathname, search } = this.document.location;
    this.document.defaultView?.history.pushState(null, '', `${pathname}${search}#${hash}`);
  }
}
