import { Component, Input, OnInit } from '@angular/core';
import * as Rx from 'rxjs';
import { StepType } from 'src/app/domain/step';
import { TodoListItem } from 'src/app/domain/todo/todo-list-item';
import {
  TodoItemState,
  TodoItemStore,
} from 'src/app/presentation/todo-list/todo-item/todo-item.store';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss'],
  providers: [TodoItemStore],
})
export class TodoItemComponent implements OnInit {
  @Input() item!: TodoListItem;

  store$: Rx.Observable<TodoItemState> = this.store.state$;

  constructor(private readonly store: TodoItemStore) {}

  ngOnInit(): void {
    this.store.setItem(this.item);
  }

  edit() {
    this.store.edit();
  }

  update() {
    this.store.update();
  }

  reset() {
    this.store.reset();
  }

  handleStepChange(stepType: string) {
    this.store.updateFormStep(stepType as StepType);
  }

  handleTitleChange(title: string) {
    this.store.updateFormTitle(title);
  }
}
