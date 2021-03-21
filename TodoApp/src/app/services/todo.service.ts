import { Injectable } from '@angular/core';
import Todo from '../model/todo';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private todos: Todo[] = [
    {
      id: 0,
      priority: 'medium',
      completed: false,
      selected: false,
      label: 'Find Thanos',
      detail: 'Ironman find thanos',
    },
    {
      id: 1,
      priority: 'low',
      completed: false,
      selected: false,
      label: 'Meet Nick Furry',
      detail: 'Captain america need to meet Mr. Furry',
    },
  ];

  constructor() {}

  getAllTodos(): Todo[] {
    return this.todos;
  }

  addTodo(todo: Todo): void {
    const newTodo = { ...todo, id: this.todos.length };
    this.todos = [newTodo, ...this.todos];
  }

  updateTodo(todo: Todo): void {
    this.todos = this.todos.map((item: Todo) => {
      if (item.id === todo.id) {
        return { ...item, ...todo };
      }
      return item;
    });
  }

  deleteTodo(todoToDelete: any[]): void {
    if (Array.isArray(todoToDelete) && todoToDelete.length > 0) {
      this.todos = this.todos.filter((item) => !todoToDelete.includes(item.id));
    } else {
    }
  }
}
