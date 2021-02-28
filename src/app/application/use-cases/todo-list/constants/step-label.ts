import { InjectionToken } from '@angular/core';
import { StepType } from 'src/app/domain/step';

export const stepLabels: { [key in StepType]: string } = {
  'pre-proposal': '仕様提案前',
  'pre-completed': '実装完了前',
  'pre-release': 'リリース前',
};
export type StepLabels = typeof stepLabels;

export const STEP_LABELS = new InjectionToken<StepLabels>('StepLabels', {
  providedIn: 'root',
  factory: () => stepLabels,
});
