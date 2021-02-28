import { Injectable } from '@angular/core';
import { parseISO } from 'date-fns';
import { milestone, Milestone } from 'src/app/domain/milestone';
import { step, Step } from 'src/app/domain/step';
import { TodoListItem } from 'src/app/domain/todo/todo-list-item';
import { User } from 'src/app/domain/user/user';
import { ResponseBodyItem } from 'src/app/infra/api-interface/todos/get-list';

@Injectable({
  providedIn: 'root',
})
export class TodoListApiParser {
  parseForFetch(response: ResponseBodyItem): TodoListItem {
    return new TodoListItem(
      response.id,
      response.title,
      this.parseMilestone(response.milestone),
      this.parseUser(response.assignee),
      this.parseToStep(response.step)
    );
  }

  private parseMilestone(item: ResponseBodyItem['milestone']): Milestone {
    if (!item) {
      return milestone(null);
    }

    return milestone({
      type: item.type,
      from: !item.from ? undefined : parseISO(item.from),
      to: !item.to ? undefined : parseISO(item.to),
      dueDate: !item.dueDate ? undefined : parseISO(item.dueDate),
    });
  }

  private parseToStep(item: ResponseBodyItem['step']): Step {
    return step(item);
  }

  private parseUser(list: ResponseBodyItem['assignee']): User[] {
    return list.map((item) => new User(item.id, item.name, item.avatarUrl));
  }
}
