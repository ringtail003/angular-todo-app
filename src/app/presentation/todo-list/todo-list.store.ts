import { Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import * as Rx from 'rxjs';
import { tap } from 'rxjs/operators';
import { TodoListUseCase } from 'src/app/application/use-cases/todo-list/todo-list-usecase';
import { TodoListItem } from 'src/app/domain/todo/todo-list-item';

export interface TodoListState {
  isLoading: boolean;
  list: TodoListItem[];
}

@Injectable()
export class TodoListStore extends ComponentStore<TodoListState> {
  constructor(private readonly usecase: TodoListUseCase) {
    super({
      isLoading: false,
      list: [],
    });
  }

  readonly state$: Rx.Observable<TodoListState> = this.select((state) => state);

  fetch(): void {
    this.setLoading();

    this.usecase
      .fetch()
      .pipe(
        tap((list) => this.updateList(list)),
        tap(() => this.resetLoading())
      )
      .subscribe();
  }

  private updateList(list: TodoListItem[]): void {
    this.patchState({ list });
  }

  private setLoading(): void {
    this.patchState({
      isLoading: true,
    });
  }

  private resetLoading(): void {
    this.patchState({
      isLoading: false,
    });
  }
}
