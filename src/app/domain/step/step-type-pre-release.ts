import { AbstractStep } from 'src/app/domain/step/abstract';
import { StepType } from '.';

export class StepTypePreRelease extends AbstractStep {
  get type(): StepType {
    return 'pre-release';
  }
}
