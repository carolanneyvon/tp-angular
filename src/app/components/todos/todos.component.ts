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
  selected!: Todo;
  
  constructor(
    private _todoService: TodoService
  ) {}

  selectTodo(selected: Todo) {
    this.selected = selected; // peu également être fait directement dans le html
  }

  toggleStateTodo(todo: Todo) {
    todo.done = !todo.done;
    this._todoService.update(todo);
  }

  editTodo(todo: Todo){ // recupère une chaine de caractère ou undefined
    console.log("edition de la todo...");
  }

  deleteTodo(id?: string){ // recupère une chaine de caractère ou undefined
    //if (id){ // si id existe alors suppression => deplacer dans le service
      this._todoService.delete(id);
    //}
  }
}