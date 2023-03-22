import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
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

//Avant le ngOnInit et le ngOnDestroy
// export class FooterComponent {
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

export class FooterComponent implements OnInit, OnDestroy {
  todos: Todo[] = [];
  
  //Abonnement
  private _subscription!: Subscription;

  constructor(private _todoService: TodoService) {}

  //On récupere l'abonnement
  ngOnInit() {
    this._subscription = this._todoService.todos$.subscribe(
      todosReceived => this.todos = todosReceived
    );
  }

  //On détruit l'abonnement
  ngOnDestroy() {
    this._subscription.unsubscribe();
  }
}
