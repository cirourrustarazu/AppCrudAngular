import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { todosSelector } from 'src/app/providers/todos.reducers';
import { TodoModel } from 'src/app/providers/todos.states';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  todos: TodoModel[] = [];

  constructor(private store:Store){}
  
  ngOnInit():void{
    this.loadTodos();
  }

  loadTodos(){
    this.store.select(todosSelector).subscribe((state)=>this.todos = state);
  }
}
