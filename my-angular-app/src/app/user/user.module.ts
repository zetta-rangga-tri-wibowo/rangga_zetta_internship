import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {UserDetailComponent} from "../component/user-detail/user-detail.component";
import {UserListComponent} from "../component/user-list/user-list.component";
import {UserFormComponent} from "../component/user-form/user-form.component";
import {DestroyComponent} from "../component/destroy/destroy.component";




@NgModule({
  declarations: [
    UserListComponent,
    UserDetailComponent,
    UserFormComponent,
    DestroyComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
  ], exports: [
    UserListComponent,
    UserFormComponent,
    UserDetailComponent,
    DestroyComponent
  ]
})
export class UserModule { }
