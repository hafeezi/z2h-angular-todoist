import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  todos: Array<any>;

  ngOnInit() {
    this.todos = [];
  }

  addTodo(f) {
    if (f.valid) {
      this.todos.push({ todo: f.value.todo, duedate: f.value.duedate, done: false })
    }
  }

  deleteTodo(item) {
    const id = this.todos.indexOf(item);
    this.todos.splice(id);
  }
}
