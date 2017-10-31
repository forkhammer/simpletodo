import { Component, OnInit } from '@angular/core';
import {TodoService} from '../../service/todo.service';
import {ITodo} from '../../model/todo.interface';
import {GlobalsService} from '../../service/globals.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  items: ITodo[];

  constructor(private todoService: TodoService, public globals:GlobalsService) { }

  ngOnInit() {
    this.updateList();
  }

  updateList() {
    this.todoService.list().subscribe(res => {
      this.items = res;
    });
  }

  delete(e, item) {
    this.todoService.delete(item).subscribe(res => {
      this.updateList();
    });
    e.preventDefault();
    return false;
  }

}
