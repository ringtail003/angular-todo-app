import { Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import * as Rx from 'rxjs';
import { filter, switchMap, tap } from 'rxjs/operators';
import { TodoListUseCase } from 'src/app/application/use-cases/todo-list/todo-list-usecase';
import { step, StepType } from 'src/app/domain/step';
import { TodoListItem } from 'src/app/domain/todo/todo-list-item';
import { TodoListItemSetting } from 'src/app/domain/todo/todo-list-item-setting';

interface InitialTodoItemState {
  item?: TodoListItem;
  form: TodoListItemSetting | null;
  isEditing: boolean;
  isUpdating: boolean;
}
export type TodoItemState = Required<InitialTodoItemState>;

@Injectable()
export class TodoItemStore extends ComponentStore<InitialTodoItemState> {
  constructor(private readonly usecase: TodoListUseCase) {
    super({
      isEditing: false,
      isUpdating: false,
      form: null,
    });

    this.effect((update$: Rx.Observable<TodoItemState>) => {
      return update$.pipe(
        switchMap((state) => this.usecase.updateItem(state.form!)),
        tap((persisted) => this.setItem(persisted)),
        tap(() => this.reset())
      );
    })(this.update$);
  }

  readonly state$: Rx.Observable<TodoItemState> = this.select(
    (state) => state
  ).pipe(filter((v): v is Required<InitialTodoItemState> => !!v?.item));

  readonly update$: Rx.Observable<TodoItemState> = this.select(
    (state) => state,
    { debounce: true }
  ).pipe(
    filter((v): v is Required<InitialTodoItemState> => !!v?.item),
    filter((v) => !!v?.isUpdating)
  );

  setItem(item: TodoListItem): void {
    this.patchState({ item });
  }

  edit(): void {
    this.updater((state) => {
      return {
        ...state,
        isEditing: true,
        form: new TodoListItemSetting(state.item),
      };
    })();
  }

  update(): void {
    this.patchState({ isUpdating: true });
  }

  reset(): void {
    this.patchState({
      isEditing: false,
      isUpdating: false,
      form: null,
    });
  }

  updateFormStep(stepType: StepType): void {
    this.updater((state) => {
      state.form!.step = step({ type: stepType });

      return {
        ...state,
      };
    })();
  }

  updateFormTitle(title: string): void {
    this.updater((state) => {
      state.form!.title = title;

      return {
        ...state,
      };
    })();
  }
}
