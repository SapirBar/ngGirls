import { Injectable } from '@angular/core';

@Injectable()
export class TodoListService {

  private todoList = [
    { title: 'install NodeJS' },
    { title: 'install Angular CLI' },
    { title: 'create new app' },
    { title: 'serve app' },
    { title: 'develop app' },
    { title: 'deploy app' },
  ];

  addItem(title: string): void {
    this.todoList.push({ title });
  }

  constructor() {
  }

  getTodoList() {
    return this.todoList;
  }
}