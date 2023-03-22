import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
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

  //nouvel object public (observable => fini par $)
  public todos$ = new BehaviorSubject([
    new Todo('Faire la vaisselle'),
    new Todo('Faire le ménage'),
    new Todo('Faire les courses'),
    new Todo('Travailler les cours'),
  ]);

  // copie du tableau todo pour que seul le servcie puisse agir sur les données
  // pour protéger les données
  // passer le tableau en privé et faire une copie
  // getter appeler todos donc aucune modification dans todos.components.ts et dans le footer
  get todos(){
    return [ ...this._todos]
  }

  //.next => contient les valeurs de l'observable todos$
  //.value => récupére les valeurs manipuler par l'observable et les mets dans un tableau
  //new => nouvelle tâche
  constructor() {
    setTimeout(() => {
      this.todos$.next([
        ...this.todos$.value,
        new Todo("Démarrer le programme"),
      ]);
    }, 2000);

    setTimeout(() => {
      this.todos$.next([]);
    }, 3000);

    //abonnement à l'observable
    const sub = this.todos$.subscribe(
      () => console.log('Yeah')
    );

    //désabonnement au bout d'un certain temps pour libérer la mémoire
    setTimeout(() => {
      sub.unsubscribe();
    }, 5000);
  }
}
