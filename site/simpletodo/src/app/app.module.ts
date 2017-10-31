import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { TodoListComponent } from './component/todo-list/todo-list.component';
import { TodoDetailComponent } from './component/todo-detail/todo-detail.component';
import { TodoFormComponent } from './component/todo-form/todo-form.component';
import { AuthComponent } from './component/auth/auth.component';
import { RegisterComponent } from './component/register/register.component';
import { routes } from './router';
import {GlobalsService} from './service/globals.service';
import {UserService} from './service/user.service';
import {TodoService} from './service/todo.service';

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    TodoDetailComponent,
    TodoFormComponent,
    AuthComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [GlobalsService, UserService, TodoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
