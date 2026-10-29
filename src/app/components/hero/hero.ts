import { ChangeDetectionStrategy, Component } from '@angular/core';

import { ChipList } from '../chip-list/chip-list';
import { CopyEmail } from '../../directives/copy-email';
import { HERO, PROFILE } from '../../data/profile.data';

@Component({
  selector: 'app-hero',
  imports: [ChipList, CopyEmail],
  templateUrl: './hero.html',
  styleUrl: './hero.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Hero {
  protected readonly hero = HERO;
  protected readonly profile = PROFILE;
}
