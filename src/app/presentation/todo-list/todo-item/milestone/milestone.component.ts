import { Component, Input, OnInit } from '@angular/core';
import { Milestone, MilestoneType } from 'src/app/domain/milestone';
import { MilestoneTypeDueDate } from 'src/app/domain/milestone/milestone-type-due-date';
import { MilestoneTypeSpan } from 'src/app/domain/milestone/milestone-type-span';

@Component({
  selector: 'app-milestone',
  templateUrl: './milestone.component.html',
  styleUrls: ['./milestone.component.scss'],
})
export class MilestoneComponent implements OnInit {
  @Input() milestone!: Milestone;

  constructor() {}

  ngOnInit(): void {}

  asDueDate(): MilestoneTypeDueDate | never {
    return this.castOrNever<MilestoneTypeDueDate>('due-date');
  }

  asSpan(): MilestoneTypeSpan | never {
    return this.castOrNever<MilestoneTypeSpan>('span');
  }

  private castOrNever<T extends Milestone>(type: MilestoneType): T | never {
    if (this.milestone.type !== type) {
      throw new Error(`Invalid cast [${this.milestone.type}]`);
    }

    return this.milestone as T;
  }
}
