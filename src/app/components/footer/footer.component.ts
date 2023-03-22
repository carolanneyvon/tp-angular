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
// pop supprime le dernier élément d'un tableau
// export class FooterComponent {
//   todos: Todo[] = this._todoService.todos;
//   constructor(private _todoService: TodoService) {
//     this.todos.pop();
//   }
// }

export class FooterComponent {
  todos: Todo[] = [];

  constructor(private _todoService: TodoService) {
    const sub = this._todoService.todos$.subscribe(
      todosReceived => {
        this.todos = todosReceived;
      }
    );

    setTimeout(() => {
      sub.unsubscribe();
    }, 20000);
  }
}
