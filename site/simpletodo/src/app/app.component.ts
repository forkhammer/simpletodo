import { Component, OnInit } from '@angular/core';
import {GlobalsService} from './service/globals.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(public globals: GlobalsService) {}

  ngOnInit() {
  }

  logout(e) {
    this.globals.logout();
    e.preventDefault();
    return false;
  }
}
