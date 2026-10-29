import { ChangeDetectionStrategy, Component } from '@angular/core';

import { SKILLS_SECTION, SKILL_GROUPS } from '../../data/skills.data';
import { ChipList } from '../chip-list/chip-list';
import { SectionHeader } from '../section-header/section-header';

@Component({
  selector: 'app-skills',
  imports: [SectionHeader, ChipList],
  templateUrl: './skills.html',
  styleUrl: './skills.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Skills {
  protected readonly heading = SKILLS_SECTION;
  protected readonly groups = SKILL_GROUPS;
}
