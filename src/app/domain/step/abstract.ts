import { StepType } from 'src/app/domain/step';

export abstract class AbstractStep {
  abstract type: StepType;
}
