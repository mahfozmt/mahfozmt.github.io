import { ChangeDetectionStrategy, Component } from '@angular/core';

import { CREDENTIALS, CREDENTIALS_SECTION } from '../../data/credentials.data';
import { SectionHeader } from '../section-header/section-header';

@Component({
  selector: 'app-credentials',
  imports: [SectionHeader],
  templateUrl: './credentials.html',
  styleUrl: './credentials.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Credentials {
  protected readonly heading = CREDENTIALS_SECTION;
  protected readonly credentials = CREDENTIALS;
}
