import { Injectable } from '@angular/core';
import {IUser} from '../model/user.interface';
import {Http, RequestOptions} from '@angular/http';
import {environment} from '../../environments/environment';
import 'rxjs/add/operator/map';

@Injectable()
export class UserService {

  constructor(private http: Http) { }

  login(username: string, password: string) {
    const options: RequestOptions = new RequestOptions({withCredentials: true});
    return this.http.post(environment.backendUrl + '/api/user/login', {
      username: username,
      password: password
    }, options).map(res => {
      return res.json();
    });
  }

  register(username: string, password: string, first_name?: string, last_name?: string) {
    const options: RequestOptions = new RequestOptions({withCredentials: true});
    return this.http.post(environment.backendUrl + '/api/user/register', {
      username: username,
      password: password,
      first_name: first_name,
      last_name: last_name
    }, options).map(res => {
      return res.json();
    });
  }

  logout() {
    const options: RequestOptions = new RequestOptions({withCredentials: true});
    return this.http.post(environment.backendUrl + '/api/user/logout', options)
        .map(res => res.json());
  }

  getActive () {
    const options: RequestOptions = new RequestOptions({withCredentials: true});
    return this.http.get(environment.backendUrl + '/api/user/active', options)
        .map(res => res.json());
  }

}
