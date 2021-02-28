import { MilestoneType } from 'src/app/domain/milestone';
import { AbstractMilestone } from 'src/app/domain/milestone/abstract';

export class MilestoneTypeSpan extends AbstractMilestone {
  constructor(public readonly from: Date, public readonly to: Date) {
    super();
  }

  get type(): MilestoneType {
    return 'span';
  }

  isExpired() {
    return super.isExpired(this.to);
  }

  isValid() {
    return !!this.from && !!this.to;
  }
}
