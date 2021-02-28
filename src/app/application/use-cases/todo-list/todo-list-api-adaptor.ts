import { Injectable } from '@angular/core';
import * as Rx from 'rxjs';
import { map } from 'rxjs/operators';
import { TodoListApiParser } from 'src/app/application/use-cases/todo-list/todo-list-api-parser';
import { TodoListItem } from 'src/app/domain/todo/todo-list-item';
import { TodoListItemSetting } from 'src/app/domain/todo/todo-list-item-setting';
import { TodoRepository } from 'src/app/infra/repositories/todo-repository';

@Injectable({
  providedIn: 'root',
})
export class TodoListApiAdaptor {
  constructor(
    private repository: TodoRepository,
    private apiParser: TodoListApiParser
  ) {}

  fetch(): Rx.Observable<TodoListItem[]> {
    return this.repository
      .fetch()
      .pipe(map((list) => list.map((v) => this.apiParser.parseForFetch(v))));
  }

  update(item: TodoListItemSetting): Rx.Observable<TodoListItem> {
    return this.repository.update(item).pipe(
      map(() => {
        return new TodoListItem(
          item.id!,
          item.title,
          item.milestone,
          item.assignee,
          item.step
        );
      })
    );
  }
}
