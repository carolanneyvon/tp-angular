import { Injectable } from '@angular/core';
import { Todo } from '../models/todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  //public todos: Todo[] = [
  private _todos: Todo[] = [
    new Todo('Faire la vaisselle'),
    new Todo('Faire le ménage'),
    new Todo('Faire les courses'),
    new Todo('Travailler les cours'),
  ];

  // copie du tableau todo pour que seul le servcie puisse agir sur les données
  // pour protéger les données
  // passer le tableau en privé et faire une copie
  // getter appeler todos donc aucune modification dans todos.components.ts et dans le footer
  get todos(){
    return [ ...this._todos]
  }
  constructor() {
    setTimeout(() => {
      this._todos.push(new Todo("Démarrer le programme"));
    }, 2000);
  }
}
