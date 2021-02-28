import { Injectable } from '@angular/core';
import * as Rx from 'rxjs';
import { TodoListApiAdaptor } from 'src/app/application/use-cases/todo-list/todo-list-api-adaptor';
import { TodoListItem } from 'src/app/domain/todo/todo-list-item';
import { TodoListItemSetting } from 'src/app/domain/todo/todo-list-item-setting';

@Injectable({
  providedIn: 'root',
})
export class TodoListUseCase {
  constructor(private apiAdaptor: TodoListApiAdaptor) {}

  fetch(): Rx.Observable<TodoListItem[]> {
    return this.apiAdaptor.fetch();
  }

  updateItem(item: TodoListItemSetting): Rx.Observable<TodoListItem> {
    return this.apiAdaptor.update(item);
  }
}
