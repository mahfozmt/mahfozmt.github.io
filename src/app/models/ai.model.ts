import { ArchitectureFlow } from './case-study.model';

export interface AiCard {
  readonly title: string;
  readonly badge: string;
  readonly description: string;
  readonly flow?: ArchitectureFlow;
  readonly chips: readonly string[];
}
