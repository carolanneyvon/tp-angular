import { Component } from '@angular/core';
import { Todo } from 'src/app/shared/models/todo';
import { TodoService } from 'src/app/shared/services/todo.service';

@Component({
  selector: 'app-footer',
  template: `
    <hr>
    <footer>
      <div *ngFor="let todo of todos">{{ todo.text }}</div>
    </footer>
  `,
  styles: [
    'hr { margin-top: 90px }',
    'footer { text-align:center; font-size: 0.7rem }',
  ]
})
export class FooterComponent {
  todos: Todo[] = this._todoService.todos;
  constructor(private _todoService: TodoService) {}
}
