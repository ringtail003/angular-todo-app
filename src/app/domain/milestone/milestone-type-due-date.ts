import { MilestoneType } from 'src/app/domain/milestone';
import { AbstractMilestone } from 'src/app/domain/milestone/abstract';

export class MilestoneTypeDueDate extends AbstractMilestone {
  constructor(public readonly dueDate: Date) {
    super();
  }

  get type(): MilestoneType {
    return 'due-date';
  }

  isExpired() {
    return super.isExpired(this.dueDate);
  }

  isValid() {
    return !!this.dueDate;
  }
}
