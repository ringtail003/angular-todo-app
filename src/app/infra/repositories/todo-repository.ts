import { Injectable } from '@angular/core';
import * as Rx from 'rxjs';
import { delay } from 'rxjs/operators';
import { TodoListItemSetting } from 'src/app/domain/todo/todo-list-item-setting';
import { Create } from 'src/app/infra/api-interface/todos/create';
import { GetList } from 'src/app/infra/api-interface/todos/get-list';
import { Update } from 'src/app/infra/api-interface/todos/update';

@Injectable({
  providedIn: 'root',
})
export class TodoRepository {
  fetch(): Rx.Observable<GetList['response']['body']> {
    return Rx.of([
      {
        id: 1,
        title: 'あああ',
        assignee: [],
        milestone: {
          type: 'span',
          from: '2021-01-01',
          to: '2021-01-10',
        },
        step: {
          type: 'pre-proposal',
        },
      },
      {
        id: 2,
        title: 'いいいい',
        assignee: [],
        milestone: {
          type: 'due-date',
          dueDate: '2021-03-01',
        },
        step: {
          type: 'pre-completed',
        },
      },
    ]).pipe(delay(2000));
  }

  update(item: TodoListItemSetting): Rx.Observable<Update['response']['body']> {
    return Rx.of(null).pipe(delay(2000));
  }

  create(item: TodoListItemSetting): Rx.Observable<Create['response']['body']> {
    return Rx.of({ id: 100 });
  }
}
