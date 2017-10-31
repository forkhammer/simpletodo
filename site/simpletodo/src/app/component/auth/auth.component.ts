import { Component, OnInit } from '@angular/core';
import { Http, RequestOptions } from '@angular/http';
import { environment } from '../../../environments/environment';
import 'rxjs/add/operator/map';
import {GlobalsService} from '../../service/globals.service';
import {UserService} from '../../service/user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent implements OnInit {

  username: string;
  password: string;
  errorMessage: string;
  errors: string[];

  constructor(private userService: UserService, public globals: GlobalsService, private router: Router) { }

  ngOnInit() {
    this.username = '';
    this.password = '';
  }

  submitForm() {
    this.errorMessage = '';
    this.userService.login(this.username, this.password).subscribe(res => {
      if (res.result) {
        this.globals.user = res.user;
        this.router.navigateByUrl("/");
      } else {
        this.errorMessage = res.message;
        this.errors = res.errors;
      }
    });
  }

}
