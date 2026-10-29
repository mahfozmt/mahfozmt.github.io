import { ChangeDetectionStrategy, Component } from '@angular/core';

import { AI_CARDS, AI_SECTION } from '../../data/ai.data';
import { ArchFlow } from '../arch-flow/arch-flow';
import { ChipList } from '../chip-list/chip-list';
import { SectionHeader } from '../section-header/section-header';

@Component({
  selector: 'app-ai-section',
  imports: [SectionHeader, ArchFlow, ChipList],
  templateUrl: './ai-section.html',
  styleUrl: './ai-section.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AiSection {
  protected readonly heading = AI_SECTION;
  protected readonly cards = AI_CARDS;
}
