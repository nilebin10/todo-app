import { Component, EventEmitter, OnInit, Output, Input } from '@angular/core';
import { PriorityData as _priorityItems } from '../constants/app.constant';
import { TodoService } from '../services/todo.service';

@Component({
  selector: 'app-new-todo-item',
  templateUrl: './new-todo-item.component.html',
  styleUrls: ['./new-todo-item.component.css'],
})
export class NewTodoItemComponent implements OnInit {
  PriorityData = [..._priorityItems];
  @Input() todo: any;
  @Output() cancelNew = new EventEmitter();
  constructor(private todoSvc: TodoService) {}

  ngOnInit(): void {
    console.log('Inside new component');
  }

  addNewItem(todo: any): void {
    if (todo.id === null) {
      this.todoSvc.addTodo({ ...todo });
    } else {
      this.todoSvc.updateTodo({ ...todo });
    }
    this.cancelNew.emit('newItem');
  }

  cancelNewItem(): void {
    this.cancelNew.emit('newItem');
  }

  onKeyDown(e: any): void {
    if (e.keyCode === 13 || e.keyCode === 32 || e.keyCode === 46) {
      e.stopPropagation();
    }
  }
}
