import { ChangeDetectionStrategy, Component, input } from '@angular/core';

/** A wrapping row of technology chips. */
@Component({
  selector: 'app-chip-list',
  host: { class: 'chips-group' },
  templateUrl: './chip-list.html',
  styleUrl: './chip-list.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChipList {
  readonly chips = input.required<readonly string[]>();
}
