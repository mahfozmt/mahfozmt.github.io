import { ChangeDetectionStrategy, Component } from '@angular/core';

import { OPEN_SOURCE_PROJECTS, OPEN_SOURCE_SECTION } from '../../data/projects.data';
import { ChipList } from '../chip-list/chip-list';
import { SectionHeader } from '../section-header/section-header';

@Component({
  selector: 'app-open-source',
  imports: [SectionHeader, ChipList],
  templateUrl: './open-source.html',
  styleUrl: './open-source.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OpenSource {
  protected readonly heading = OPEN_SOURCE_SECTION;
  protected readonly projects = OPEN_SOURCE_PROJECTS;
}
