import { AbstractStep } from 'src/app/domain/step/abstract';
import { StepType } from '.';

export class StepTypePreProposal extends AbstractStep {
  get type(): StepType {
    return 'pre-proposal';
  }
}
