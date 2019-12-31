import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Todo } from '../models/todo.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent implements OnInit {
  @Output() save: EventEmitter<Todo> = new EventEmitter<Todo>();

  constructor() { }

  ngOnInit() {
  }

  onSubmit(f:NgForm) {
    if (f.valid) {
      const payload = { task: f.value.task, duedate: f.value.duedate, done: false };
      this.save.emit(payload);
    }
  }

}
