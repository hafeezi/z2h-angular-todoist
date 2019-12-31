import { Component } from '@angular/core';
import { Todo } from './models/todo.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  todos: Array<Todo>;

  ngOnInit(){
    this.todos = [];

    this.loadTodos();
  }

  loadTodos() {
    const data = localStorage.getItem('todos');

    if (data) {
      this.todos = JSON.parse(data);
    }
  }

  onDelete(todo: Todo) {
    const index = this.todos.indexOf(todo);
    this.todos.splice(index, 1);
    this.saveData();
  }

  dataSubmit(event: Todo) {
    const payload = event;
    this.todos.push(payload);
    this.saveData();
  }

  saveData() {
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }
}
