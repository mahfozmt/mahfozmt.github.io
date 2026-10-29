export type SkillIcon =
  'server' | 'layers' | 'database' | 'cloud' | 'shield' | 'smartphone' | 'sparkles';

export interface SkillGroup {
  readonly id: string;
  readonly title: string;
  readonly icon: SkillIcon;
  readonly chips: readonly string[];
  /** Wide groups span the whole grid row. */
  readonly wide?: boolean;
}
