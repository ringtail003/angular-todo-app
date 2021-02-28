import {
  Component,
  EventEmitter,
  Inject,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import {
  StepLabels,
  STEP_LABELS,
} from 'src/app/application/use-cases/todo-list/constants/step-label';
import { Step, StepType } from 'src/app/domain/step';

interface Choice {
  type: StepType;
  label: string;
}

@Component({
  selector: 'app-step',
  templateUrl: './step.component.html',
  styleUrls: ['./step.component.scss'],
})
export class StepComponent implements OnInit {
  @Input() step!: Step;
  @Input() isEditing!: boolean;
  @Output() onChange = new EventEmitter<StepType>();
  choices!: Choice[];
  chosen!: Choice;

  constructor(@Inject(STEP_LABELS) public stepLabels: StepLabels) {}

  ngOnInit(): void {
    this.choices = Object.keys(this.stepLabels).map((type) => ({
      type: type as StepType,
      label: this.stepLabels[type as StepType],
    }));

    const chosen = this.choices.find((v) => v.type === this.step.type);

    if (!chosen) {
      throw new InvalidTypeError(this.step.type);
    }

    this.chosen = chosen;
  }

  trackByFn(_: number, item: Choice) {
    return item.type;
  }

  handleChange(stepType: string) {
    this.onChange.emit(stepType as StepType);
  }
}

class InvalidTypeError extends Error {
  constructor(type: StepType) {
    super(`Expected valid step type. but got [${type}].`);
  }
}
