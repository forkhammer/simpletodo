import { Routes } from '@angular/router';
import { TodoListComponent } from './component/todo-list/todo-list.component';
import { TodoDetailComponent } from './component/todo-detail/todo-detail.component';
import { TodoFormComponent } from './component/todo-form/todo-form.component';
import { AuthComponent } from './component/auth/auth.component';
import { RegisterComponent } from './component/register/register.component';

export const routes: Routes = [
    { path: '', component: TodoListComponent },
    { path: 'detail/:id', component: TodoDetailComponent },
    { path: 'edit/:id', component: TodoFormComponent },
    { path: 'create', component: TodoFormComponent },
    { path: 'login', component: AuthComponent },
    { path: 'register', component: RegisterComponent }
];
