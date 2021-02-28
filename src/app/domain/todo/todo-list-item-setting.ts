import { Milestone } from 'src/app/domain/milestone';
import { MilestoneTypeNoop } from 'src/app/domain/milestone/milestone-type-noop';
import { Step } from 'src/app/domain/step';
import { StepTypePreProposal } from 'src/app/domain/step/step-type-pre-proposal';
import { TodoListItem } from 'src/app/domain/todo/todo-list-item';
import { User } from 'src/app/domain/user/user';

export class TodoListItemSetting {
  public id: number | null = null;
  public title: string = '';
  public assignee: User[] = [];
  public step: Step = new StepTypePreProposal();
  public milestone: Milestone = new MilestoneTypeNoop();

  constructor(source?: TodoListItem) {
    if (source) {
      Object.assign(this, source);
    }
  }

  isValid() {
    return !!this.title;
  }
}
