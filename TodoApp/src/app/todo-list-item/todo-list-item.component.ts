import { Component, Input, OnInit } from '@angular/core';
import Todo from '../model/todo';
import { PriorityData as _priorityItems } from '../constants/app.constant';

@Component({
  selector: 'app-todo-list-item',
  templateUrl: './todo-list-item.component.html',
  styleUrls: ['./todo-list-item.component.css'],
})
export class TodoListItemComponent implements OnInit {
  @Input() todo: Todo;
  editing = false;
  isNewTodo = false;
  PriorityData = [..._priorityItems];
  constructor() {}

  ngOnInit(): void {}

  editTodo(): void {
    this.editing = true;
  }

  cancelNewForm(): void {
    this.editing = false;
  }

  onDoubleclick(e: any): void {
    console.log('editing');
    this.editing = true;
  }

  onFocusLost(e: any): void {
    this.editing = false;
  }
}
