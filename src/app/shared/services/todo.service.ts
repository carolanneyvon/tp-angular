import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Todo } from '../models/todo';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  public todos$ = new BehaviorSubject<Todo[]>([]);

  constructor(private _http: HttpClient) {
    this.findAll(); //récupère l'ensemble des tâches
  }

  public findAll(){
    this._http.get<Todo[]>('http://localhost:3000/todos')
    .subscribe(todosFromApi => { //observable, il faut donc s'abonner, fonction qui récupère toutes les todos à la connexion
      this.todos$.next(todosFromApi)//met à jour le BehaviorSubject
    });
  }

  // public create(todo: Todo) {
  //   //console.log(todo);
  //   this.todos$.next([
  //     todo,
  //     ...this.todos$.value
  //   ])
  // }

  public create(todo: Todo) {
    this._http.post<Todo>('http://localhost:3000/todos', todo) 
    // à la place de todo => objet littéral avec les propriétés { text: todo.text, done: todo.done }
    // test ok mais done enregistré en tant que chaine de caractère
      .subscribe(newTodo => {
        const currentTodos = this.todos$.getValue(); //observable renvoie la nouvelle tâches
        this.todos$.next([...currentTodos, newTodo]); //ajout de la nouvelle tâche à la liste existante grâce au '...'
      });
  }

}
