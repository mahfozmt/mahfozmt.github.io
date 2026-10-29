import { ChangeDetectionStrategy, Component, input } from '@angular/core';

import { ArchitectureFlow } from '../../models/case-study.model';

/** Left-to-right pipeline of architecture nodes, for example `Angular SPA ➔ Web API ➔ SQL Server`. */
@Component({
  selector: 'app-arch-flow',
  host: { class: 'architecture-box' },
  templateUrl: './arch-flow.html',
  styleUrl: './arch-flow.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ArchFlow {
  readonly flow = input.required<ArchitectureFlow>();
}
