import { Component, OnDestroy, OnInit } from '@angular/core';
import { Todo } from 'src/app/shared/models/todo';
import { TodoService } from 'src/app/shared/services/todo.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})

export class TodosComponent {
  todos$ = this._todoService.todos$;
  
  constructor(
    private _todoService: TodoService
  ) {}

  toggleStateTodo(todo: Todo) {
    todo.done = !todo.done;
    this._todoService.update(todo);
  }
}