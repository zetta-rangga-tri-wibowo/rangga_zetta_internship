// import { Component, OnInit } from '@angular/core';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import {Todo} from "./todo.model"
import {TodoService} from "../../service/todo.service";
import {NotificationService} from "../../service/notification.service";

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit, OnDestroy {
  todos: Todo[] = [];
  newTodoTitle: string = '';
  private subscription: Subscription = new Subscription();

  constructor(
    private todoService: TodoService,
    private notificationService: NotificationService
  ) {}

  ngOnInit(): void {
    // we subscribe to the todos$ observable to get the latest todos
    this.subscription = this.todoService.todos$.subscribe(todos => {
      this.todos = todos;
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  addTodo() {
    if (this.newTodoTitle.trim() === '') {
      this.notificationService.notify('Please enter a todo title.');
      return;
    }

    const newTodo: Todo = {
      id: Date.now(),
      title: this.newTodoTitle,
      completed: false,
    };
    this.todoService.addTodo(newTodo);
    this.newTodoTitle = '';
    this.notificationService.notify('New todo added!');
  }

  toggleCompletion(id: number) {
    this.todoService.toggleTodoCompletion(id);
    this.notificationService.notify('Todo completion toggled!');
  }
}
