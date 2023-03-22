import { Component, OnDestroy, OnInit } from '@angular/core';
// import { Subscription } from 'rxjs';
// import { Todo } from 'src/app/shared/models/todo';
import { TodoService } from 'src/app/shared/services/todo.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})

//Avant le pipe async |async
// export class TodosComponent implements OnInit, OnDestroy {
//   todos: Todo[] = [];

//   private _subscription!: Subscription;

//   constructor(private _todoService: TodoService) {}

//   ngOnInit(): void {
//     this._subscription = this._todoService.todos$.subscribe(
//       todosReceived => this.todos = todosReceived
//     );
//   }

//   ngOnDestroy(): void {
//     this._subscription.unsubscribe();
//   }
// }

export class TodosComponent {
  todos$ = this._todoService.todos$;
  constructor(
    private _todoService: TodoService
  ) {}
}