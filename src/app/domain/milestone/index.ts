import { MilestoneTypeDueDate } from 'src/app/domain/milestone/milestone-type-due-date';
import { MilestoneTypeNoop } from 'src/app/domain/milestone/milestone-type-noop';
import { MilestoneTypeSpan } from 'src/app/domain/milestone/milestone-type-span';

export type MilestoneType = null | 'span' | 'due-date';

export type Milestone =
  | MilestoneTypeNoop
  | MilestoneTypeSpan
  | MilestoneTypeDueDate;

export function milestone(
  params: {
    type: string;
    from?: Date;
    to?: Date;
    dueDate?: Date;
  } | null
): Milestone {
  if (!params) {
    return new MilestoneTypeNoop();
  }

  const type = params?.type as NonNullable<MilestoneType>;

  switch (type) {
    case 'span':
      return new MilestoneTypeSpan(params.from!, params.to!);
    case 'due-date':
      return new MilestoneTypeDueDate(params.dueDate!);
    default:
      throw new InvalidTypeError(type);
  }
}

class InvalidTypeError extends Error {
  constructor(type: never) {
    super(`Expected milestone type. But got [${type}]`);
  }
}
