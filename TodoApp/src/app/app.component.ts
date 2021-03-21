import { AfterViewInit, Component, OnDestroy, ViewChild } from '@angular/core';
import Todo from './model/todo';
import { TodoService } from './services/todo.service';
import { TodoListComponent } from './todo-list/todo-list.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnDestroy, AfterViewInit {
  title = 'TodoApp';
  showNewItemForm = false;
  todo: any;
  // allSelected = false;

  @ViewChild('todoListCmp', { static: false, read: TodoListComponent })
  todoList: TodoListComponent;
  constructor(private todoSvc: TodoService) {}
  get todos(): Todo[] {
    return this.todoSvc.getAllTodos();
  }

  ngAfterViewInit(): void {}
  addNewTodo(): void {
    if (!this.showNewItemForm) {
      this.todo = new Todo({});
      this.showNewItemForm = true;
    }
  }

  cancelNewForm(): void {
    this.todo = new Todo({});
    this.showNewItemForm = false;
  }

  selectAll(checked: boolean): void {
    // this.allSelected = checked;
    this.todoList.updateAllItems(checked);
  }

  get isIndetermined(): boolean {
    return this.todoList ? this.todoList.isIndetermined() : false;
  }

  get allSelected(): boolean {
    return this.todoList
      ? this.todoList.getSelected() === this.todos.length
      : false;
  }

  ngOnDestroy(): void {
    this.showNewItemForm = false;
  }
}
