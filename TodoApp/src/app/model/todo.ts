export default class Todo {
  id: number | null = null;
  priority: TodoPriority = 'medium';
  completed = false;
  selected = false;
  label = '';
  detail = '';
  constructor(TodoObj: any = {}) {
    Object.assign(this, TodoObj);
  }
}

export type TodoPriority = 'high' | 'medium' | 'low';
