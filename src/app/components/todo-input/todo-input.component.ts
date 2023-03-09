import { Component, OnInit} from '@angular/core';
import { Store } from '@ngrx/store';
import { actions } from 'src/app/providers/todos.actions';
import { todosSelector } from 'src/app/providers/todos.reducers';
import { TodoModel } from 'src/app/providers/todos.states';

@Component({
  selector: 'app-todo-input',
  templateUrl: './todo-input.component.html',
  styleUrls: ['./todo-input.component.scss']
})
export class TodoInputComponent implements OnInit{
  todoInput?:string;
  todos?: TodoModel[];

  constructor(private store:Store){}

  ngOnInit(): void {
    this.store.select(todosSelector).subscribe(state=>this.todos = state);
  }

  addTodo(){
    if(this.todoInput!.trim().length > 0)
      this.store.dispatch(actions.addTodoAction(
        {
          id: this.todos!.length,
          completed: false,
          description: this.todoInput!.trim(),
        }
      ))
      this.todoInput = '';
  }
}
