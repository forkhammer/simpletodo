import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ITodo} from '../../model/todo.interface';
import {TodoService} from '../../service/todo.service';

@Component({
  selector: 'app-todo-detail',
  templateUrl: './todo-detail.component.html',
  styleUrls: ['./todo-detail.component.scss']
})
export class TodoDetailComponent implements OnInit {

  todo: ITodo;

  constructor(private route: ActivatedRoute, private todoService: TodoService) { 
    this.route.params.subscribe(params => {
      this.todoService.get(params.id).subscribe(res => {
        this.todo = res;
      });
    });
  }

  ngOnInit() {
  }

}
