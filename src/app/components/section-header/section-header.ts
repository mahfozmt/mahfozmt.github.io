import { ChangeDetectionStrategy, Component, input } from '@angular/core';

import { SectionHeading } from '../../models/section-heading.model';

/** Eyebrow, title and lead paragraph that open every content section. */
@Component({
  selector: 'app-section-header',
  host: { class: 'section-header' },
  templateUrl: './section-header.html',
  styleUrl: './section-header.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SectionHeader {
  readonly heading = input.required<SectionHeading>();
}
