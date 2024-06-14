import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './user-list/user-list.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UserCreateComponent } from './user-create/user-create.component';



@NgModule({
  declarations: [
    UserListComponent,
    UserDetailComponent,
    UserCreateComponent
  ],
  exports: [
    UserListComponent,
    UserDetailComponent,
    UserCreateComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class UserModule { }
