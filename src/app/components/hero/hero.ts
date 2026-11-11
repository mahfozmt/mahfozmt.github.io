import { ChangeDetectionStrategy, Component } from '@angular/core';

import { HERO, PROFILE } from '../../data/profile.data';
import { CopyEmail } from '../../directives/copy-email';

@Component({
  selector: 'app-hero',
  imports: [CopyEmail],
  templateUrl: './hero.html',
  styleUrl: './hero.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Hero {
  protected readonly hero = HERO;
  protected readonly profile = PROFILE;
}
