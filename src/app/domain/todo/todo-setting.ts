import { Milestone } from '../milestone';
import { Step } from '../step';
import { User } from '../user/user';

export class TodoSetting {
  constructor(
    public readonly id: number,
    public title: string,
    public body: string,
    public milestone: Milestone,
    public assignee: User[],
    public step: Step
  ) {}

  isValid() {
    return !!this.title && this.milestone.isValid();
  }
}
