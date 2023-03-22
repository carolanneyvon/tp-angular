import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Todo } from 'src/app/shared/models/todo';
import { TodoService } from 'src/app/shared/services/todo.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})

//Avant le ngOnInit et le ngOnDestroy
// export class TodosComponent {
//   todos: Todo[] = [];
  
//   constructor(private _todoService: TodoService) {
//     const sub = this._todoService.todos$.subscribe(
//       todosReceived => {
//         this.todos = todosReceived;
//       }
//     );

//     setTimeout(() => {
//       sub.unsubscribe();
//     }, 20000);
//   }
// }

export class TodosComponent implements OnInit, OnDestroy {
  todos: Todo[] = [];

  private _subscription!: Subscription;

  constructor(private _todoService: TodoService) {}

  ngOnInit(): void {
    this._subscription = this._todoService.todos$.subscribe(
      todosReceived => this.todos = todosReceived
    );
  }

  ngOnDestroy(): void {
    this._subscription.unsubscribe();
  }
}