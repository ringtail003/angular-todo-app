import { StepTypePreCompleted } from 'src/app/domain/step/step-type-pre-completed';
import { StepTypePreProposal } from 'src/app/domain/step/step-type-pre-proposal';
import { StepTypePreRelease } from 'src/app/domain/step/step-type-pre-release';

export type StepType = 'pre-proposal' | 'pre-completed' | 'pre-release';
export type Step =
  | StepTypePreProposal
  | StepTypePreCompleted
  | StepTypePreRelease;

export function step(params: { type: string }): Step {
  const type = params.type as StepType;

  switch (type) {
    case 'pre-proposal':
      return new StepTypePreProposal();
    case 'pre-completed':
      return new StepTypePreCompleted();
    case 'pre-release':
      return new StepTypePreRelease();
    default:
      throw new InvalidTypeError(type);
  }
}

class InvalidTypeError extends Error {
  constructor(type: never) {
    super(`Expected step type. But got [${type}]`);
  }
}
