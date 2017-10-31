import { Injectable } from '@angular/core';
import {Http, RequestOptions} from '@angular/http';
import {environment} from '../../environments/environment';
import 'rxjs/add/operator/map';
import {ITodo} from '../model/todo.interface';

@Injectable()
export class TodoService {

  constructor(private http: Http) { }

  list() {
    const options = new RequestOptions({withCredentials: true});
    return this.http.get(environment.backendUrl + '/api/todo', options)
      .map(res => <ITodo[]>res.json().results);
  }

  get(id: number) {
    const options = new RequestOptions({withCredentials: true});
    return this.http.get(environment.backendUrl + '/api/todo/' + id, options)
      .map(res => <ITodo>res.json());
  }

  create(todo: ITodo) {
    const options = new RequestOptions({withCredentials: true});
    return this.http.post(environment.backendUrl + '/api/todo', todo, options)
      .map(res => <ITodo>res.json());
  }

  delete(todo: ITodo) {
    const options = new RequestOptions({withCredentials: true});
    return this.http.delete(environment.backendUrl + '/api/todo/' + todo.id, options)
      .map(res => res.json());
  }

  save(todo: ITodo) {
    const options = new RequestOptions({withCredentials: true});
    return this.http.post(environment.backendUrl + '/api/todo/' + todo.id, todo, options)
      .map(res => <ITodo>res.json());
  }

}
