import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Todo } from '../component/todo/todo.model';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private todos: Todo[] = [];
  private todosSubject = new BehaviorSubject<Todo[]>(this.todos);

  todos$ = this.todosSubject.asObservable();

  addTodo(todo: Todo) {
    this.todos.push(todo);
    this.todosSubject.next(this.todos);
  }

  toggleTodoCompletion(id: number) {
    const todo = this.todos.find(t => t.id === id);
    if (todo) {
      todo.completed = !todo.completed;
      this.todosSubject.next(this.todos);
    }
  }
}
