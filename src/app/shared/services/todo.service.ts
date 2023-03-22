import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Todo } from '../models/todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  //nouvel object public (observable => fini par $)
  public todos$ = new BehaviorSubject([
    new Todo('Faire la vaisselle'),
    new Todo('Faire le ménage'),
    new Todo('Faire les courses'),
    new Todo('Travailler les cours'),
  ]);

  //.next => contient les valeurs de l'observable todos$
  //.value => récupére les valeurs manipuler par l'observable et les mets dans un tableau
  //new => nouvelle tâche
  constructor() {
    setTimeout(() => {
      this.todos$.next([
        ...this.todos$.value,
        new Todo("Démarrer le programme"),
      ]);
    }, 3000);

    setTimeout(() => {
      this.todos$.next([]);
    }, 4000);
  }
}
