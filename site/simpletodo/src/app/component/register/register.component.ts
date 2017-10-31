import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import {UserService} from '../../service/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  username: string;
  password: string;
  first_name: string;
  last_name: string;
  errorMessage: string;
  errors: string[];
  registerComplete: boolean;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.username = '';
    this.password = '';
    this.first_name = '';
    this.last_name = '';
    this.registerComplete = false;
  }

  submitForm() {
    this.errorMessage = '';
    this.userService.register(this.username, this.password, this.first_name, this.last_name).subscribe(res => {
      if (res.result) {
        this.registerComplete = true;
      } else {
        this.errorMessage = res.message;
        this.errors = res.errors;
      }
    });
  }

}
