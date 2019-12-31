import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from '../models/todo.model';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  @Input() todos: Array<Todo>;
  @Output() delete: EventEmitter<Todo> = new EventEmitter<Todo>()
  constructor() { }

  ngOnInit() {
  }

  onDelete(todo: Todo) {
    this.delete.emit(todo);
  }

}
