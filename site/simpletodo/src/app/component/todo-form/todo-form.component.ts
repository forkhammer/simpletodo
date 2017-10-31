import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ITodo} from '../../model/todo.interface';
import {TodoService} from '../../service/todo.service';
import * as _ from 'lodash';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss']
})
export class TodoFormComponent implements OnInit {

  todo: ITodo;
  isNew: boolean;
  errors: string[];

  constructor(private route: ActivatedRoute, private todoService: TodoService, private router: Router) {
    this.isNew = true;
    this.todo = <ITodo>{};

    this.route.params.subscribe(params => {
      if ('id' in params) {
        this.todoService.get(params.id).subscribe(res => {
          this.todo = res;
          this.isNew = false;
        });
      }
    });
  }

  ngOnInit() {
  }

  save() {
    if (!this.isNew) {
      this.todoService.save(this.todo).subscribe(res => {
        alert('Сохранено');
      },
      err => {
        let errObj: any = JSON.parse(err._body);
        this.errors = _.map(errObj, val => val[0]);
        console.log(this.errors);
      });
    } else {
      this.todoService.create(this.todo).subscribe(res => {
        this.todo = res;
        this.router.navigateByUrl('/detail/' + this.todo.id);
      },
      err => {
        let errObj: any = JSON.parse(err._body);
        this.errors = _.map(errObj, val => val[0]);
        console.log(this.errors);
      });
    }
  }

}
