import { ChangeDetectionStrategy, Component } from '@angular/core';

import { EXPERIENCE, EXPERIENCE_SECTION } from '../../data/experience.data';
import { ChipList } from '../chip-list/chip-list';
import { SectionHeader } from '../section-header/section-header';

@Component({
  selector: 'app-experience',
  imports: [SectionHeader, ChipList],
  templateUrl: './experience.html',
  styleUrl: './experience.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Experience {
  protected readonly heading = EXPERIENCE_SECTION;
  protected readonly entries = EXPERIENCE;
}
