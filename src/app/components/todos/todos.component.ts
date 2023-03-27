import { Component, OnDestroy, OnInit } from '@angular/core';
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
}