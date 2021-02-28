import { AbstractStep } from 'src/app/domain/step/abstract';
import { StepType } from '.';

export class StepTypePreCompleted extends AbstractStep {
  get type(): StepType {
    return 'pre-completed';
  }
}
