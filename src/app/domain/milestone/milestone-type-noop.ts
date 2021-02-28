import { MilestoneType } from 'src/app/domain/milestone';
import { AbstractMilestone } from 'src/app/domain/milestone/abstract';

export class MilestoneTypeNoop extends AbstractMilestone {
  get type(): MilestoneType {
    return null;
  }

  isExpired() {
    return false;
  }

  isValid() {
    return false;
  }
}
