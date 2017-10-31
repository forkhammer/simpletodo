import { Injectable } from '@angular/core';
import {IUser} from '../model/user.interface';
import {Http, RequestOptions} from '@angular/http';
import {Router} from '@angular/router';
import {UserService} from './user.service';

@Injectable()
export class GlobalsService {
  user: IUser = null;

  constructor(private http: Http, private router: Router, private userService: UserService) { 
    userService.getActive().subscribe(res => {
        this.user = res.user;
    });
  }

  logout() {
    this.userService.logout().subscribe(res => {
            this.user = null;
            this.router.navigateByUrl('/login');
        });
  }

}
