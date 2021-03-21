import {
  AfterViewInit,
  Component,
  HostListener,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';
import { MatSelectionList } from '@angular/material/list';
import Todo from '../model/todo';
import { TodoService } from '../services/todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent implements OnInit, AfterViewInit {
  @Input() todos: Todo[];

  @ViewChild('selectionList', { static: false, read: MatSelectionList })
  selectionCmp: MatSelectionList;

  @HostListener('window:keydown', ['$event'])
  keyDown(e: any): void {
    if (e.keyCode === 46) {
      if (this.selectionCmp && this.selectionCmp.selectedOptions.hasValue()) {
        if (this.selectionCmp.selectedOptions.selected.length > 0) {
          const itemToDelete = this.selectionCmp.selectedOptions.selected
            .filter((item) => item.value !== null)
            .map((item) => item.value);
          this.todoSvc.deleteTodo([...itemToDelete]);
        }
        console.log('Elected item are');
      }
    }
  }
  constructor(private todoSvc: TodoService) {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {}

  isIndetermined(): boolean {
    if (this.selectionCmp && this.selectionCmp.selectedOptions.hasValue()) {
      return (
        this.selectionCmp.selectedOptions.selected.length > 0 &&
        this.selectionCmp.selectedOptions.selected.length <
          this.selectionCmp.options.length
      );
    }

    return false;
  }

  getSelected(): number {
    if (!this.selectionCmp) {
      return -1;
    }

    if (this.selectionCmp.selectedOptions.hasValue()) {
      return this.selectionCmp.selectedOptions.selected.length;
    }

    return -1;
  }

  updateAllItems(checked): void {
    if (!this.selectionCmp) {
      return;
    }
    if (checked) {
      this.selectionCmp.selectAll();
    } else {
      this.selectionCmp.deselectAll();
    }
  }

  copmareWith(a, b): boolean {
    return false;
  }
}
