import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Todo } from '../models/todo';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private _baseUrl = environment.urlApi + '/todos';
  private _options = '?_sort=id&_order=desc'; // si besoin de mettre une option json server (ex: tri de la liste)

  public todos$ = new BehaviorSubject<Todo[]>([]);

  constructor(private _http: HttpClient) {
    this.findAll(); //récupère l'ensemble des tâches
  }

  //GET
  public findAll(){
    this._http.get<Todo[]>(this._baseUrl + this._options) //avec option
    .subscribe(todosFromApi => { //observable, il faut donc s'abonner, fonction qui récupère toutes les todos à la connexion
      this.todos$.next(todosFromApi)//met à jour le BehaviorSubject
    });
  }

  //POST
  public create(todo: Todo) {
    this._http
      .post<Todo>(this._baseUrl, todo)
      // .subscribe(newTodo => {
      //   this.todos$.next([
      //     newTodo,
      //     ...this.todos$.value,
      //   ]);
      // });
      .subscribe(() => this.findAll());
  }

  //PUT
  public update(todo: Todo) {
    this._http
      .put<Todo>(`${this._baseUrl}/${todo.id}`, todo)
      // .subscribe(updated => {
      //   const t = this.todos$.value.find(t => t.id == todo.id);
      // });
      .subscribe(() => this.findAll());
  }

  //DELETE
  public delete(id?: string) { //string ou indefined
    if (id){
      this._http
        .delete<Todo>(`${this._baseUrl}/${id}`)
        .subscribe(() => this.findAll());
    }
  }
}
