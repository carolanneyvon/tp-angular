import { Component } from '@angular/core';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent {
  todos = [
    { text: 'Faire la vaisselle', done: false },
    { text: 'Faire le ménage', done: true },
    { text: 'Faire les courses', done: false },
  ];
}