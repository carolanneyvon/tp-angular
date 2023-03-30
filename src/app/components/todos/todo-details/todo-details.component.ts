import { Component, Input } from '@angular/core';
import { Todo } from 'src/app/shared/models/todo';
import { TodoService } from 'src/app/shared/services/todo.service';

@Component({
  selector: 'app-todo-details',
  templateUrl: './todo-details.component.html',
  styleUrls: ['./todo-details.component.css']
})
export class TodoDetailsComponent {
  @Input() todo!: Todo|null; // recoit du parent, la liste qui renvoie la tache
  
  constructor(private _todoService: TodoService) {}

  deleteTodo(id?: string) { //pour supprimer la tache de la vue détails
    this._todoService.delete(id);
    this.todo = null;
  }
}