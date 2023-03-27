import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Todo } from '../models/todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  public todos$ = new BehaviorSubject<Todo[]>([]);

  public create(todo: Todo) {
    //console.log(todo);
    this.todos$.next([
      todo,
      ...this.todos$.value
    ])
  }

}
