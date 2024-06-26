import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {ListUserComponent} from "./user-management/list-user/list-user.component";
import {RegisterComponent} from "./user-management/register/register.component";
import {DetailUserComponent} from "./user-management/detail-user/detail-user.component";

const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: 'users', component: ListUserComponent
  },
  {
    path: 'user/:id', component: DetailUserComponent
  },
  {
    path: 'register', component: RegisterComponent
  },
  {
    path: 'edit/:id', component: RegisterComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
