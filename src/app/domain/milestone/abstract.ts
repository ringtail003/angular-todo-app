import { isBefore, startOfDay } from 'date-fns';
import { MilestoneType } from 'src/app/domain/milestone';

export abstract class AbstractMilestone {
  abstract type: MilestoneType;
  abstract isValid(): boolean;

  isExpired(date: Date) {
    return isBefore(startOfDay(new Date()), date);
  }
}
