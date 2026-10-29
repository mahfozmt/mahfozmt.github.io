import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';

import { CASE_FILTERS, CASE_STUDIES, WORK_SECTION } from '../../data/case-studies.data';
import { CaseFilter } from '../../models/case-study.model';
import { ArchFlow } from '../arch-flow/arch-flow';
import { ChipList } from '../chip-list/chip-list';
import { SectionHeader } from '../section-header/section-header';

@Component({
  selector: 'app-case-studies',
  imports: [SectionHeader, ArchFlow, ChipList],
  templateUrl: './case-studies.html',
  styleUrl: './case-studies.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CaseStudies {
  protected readonly heading = WORK_SECTION;
  protected readonly filters = CASE_FILTERS;

  readonly activeFilter = signal<CaseFilter>('all');

  /** Case studies matching the selected category filter. */
  readonly visibleCases = computed(() => {
    const filter = this.activeFilter();
    return filter === 'all'
      ? CASE_STUDIES
      : CASE_STUDIES.filter((study) => study.categories.includes(filter));
  });

  protected select(filter: CaseFilter): void {
    this.activeFilter.set(filter);
  }
}
