import { Component } from '@angular/core';
import { Todo } from 'src/app/shared/models/todo';
import { TodoService } from 'src/app/shared/services/todo.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
//Avant création du service
// export class TodosComponent {
//   todos = [
//     { text: 'Faire la vaisselle', done: false },
//     { text: 'Faire le ménage', done: true },
//     { text: 'Faire les courses', done: false },
//   ];
// }
export class TodosComponent {
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