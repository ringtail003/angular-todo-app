import { Milestone } from '../milestone';
import { Step } from '../step';
import { User } from '../user/user';

export class TodoListItem {
  constructor(
    public readonly id: number,
    public readonly title: string,
    public readonly milestone: Milestone,
    public readonly assignee: User[],
    public readonly step: Step
  ) {}
}
