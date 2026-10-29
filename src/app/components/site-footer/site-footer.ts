import { ChangeDetectionStrategy, Component } from '@angular/core';

import { FOOTER_LINKS, FOOTER_TEXT } from '../../data/navigation.data';

@Component({
  selector: 'app-site-footer',
  templateUrl: './site-footer.html',
  styleUrl: './site-footer.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiteFooter {
  protected readonly links = FOOTER_LINKS;
  protected readonly text = FOOTER_TEXT;
  protected readonly year = new Date().getFullYear();
}
