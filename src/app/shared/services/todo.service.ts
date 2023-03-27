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
      //console.log(todosFromApi)
      this.todos$.next(todosFromApi)//met à jour le BehaviorSubject, typscritp donc bien typer l'object
      // soit (<Todo[]>todosFromApi) = manière java
      // soit (todosFromApi as Todo[])
      // soit directement au niveau de la fonction get sur service http
    });
  }

  // A FAIRE = mettre à jour l'observable donc fichier json avec un POST

  public create(todo: Todo) {
    //console.log(todo);
    this.todos$.next([
      todo,
      ...this.todos$.value
    ])
  }

}
