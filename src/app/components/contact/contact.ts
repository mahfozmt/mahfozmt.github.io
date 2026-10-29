import { ChangeDetectionStrategy, Component } from '@angular/core';

import { CopyEmail } from '../../directives/copy-email';
import { CONTACT, PROFILE } from '../../data/profile.data';

@Component({
  selector: 'app-contact',
  imports: [CopyEmail],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Contact {
  protected readonly contact = CONTACT;
  protected readonly profile = PROFILE;
}
