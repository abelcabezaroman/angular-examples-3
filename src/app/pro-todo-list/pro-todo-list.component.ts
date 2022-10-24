import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pro-todo-list',
  templateUrl: './pro-todo-list.component.html',
  styleUrls: ['./pro-todo-list.component.scss'],
})
export class ProTodoListComponent implements OnInit {
  list = [
    {
      title: 'Comer calabazas',
      isDone: true,
    },
    { title: 'Pagar fantas', isDone: true },
    { title: 'Conquistar su corazon', isDone: false },
  ];
  constructor() {}

  ngOnInit(): void {}
}
