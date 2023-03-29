import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Todo } from '../models/todo';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private _baseUrl = 'http://localhost:3000/todos';

  public todos$ = new BehaviorSubject<Todo[]>([]);

  constructor(private _http: HttpClient) {
    this.findAll(); //récupère l'ensemble des tâches
  }

  //GET
  public findAll(){
    this._http.get<Todo[]>(this._baseUrl)
    .subscribe(todosFromApi => { //observable, il faut donc s'abonner, fonction qui récupère toutes les todos à la connexion
      this.todos$.next(todosFromApi)//met à jour le BehaviorSubject
    });
  }

  //POST
  public create(todo: Todo) {
    this._http
      .post<Todo>(this._baseUrl, todo)
      .subscribe(newTodo => {
        this.todos$.next([
          newTodo,
          ...this.todos$.value,
        ]);
      });
  }

  //PUT
  public update(todo: Todo) {
    this._http
      .put<Todo>(`${this._baseUrl}/${todo.id}`, todo)
      .subscribe(updated => {
        const t = this.todos$.value.find(t => t.id == todo.id);
      });
  }
}
