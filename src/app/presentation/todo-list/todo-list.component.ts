import { Component, OnInit } from '@angular/core';
import { TodoListStore } from 'src/app/presentation/todo-list/todo-list.store';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
  providers: [TodoListStore],
})
export class TodoListComponent implements OnInit {
  state$ = this.store.state$;

  constructor(private readonly store: TodoListStore) {}

  ngOnInit(): void {
    this.store.fetch();
  }
}
