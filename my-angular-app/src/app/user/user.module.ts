import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserPageComponent } from './user-page/user-page.component';
import { UserTableComponent } from './user-table/user-table.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { SharedModule } from '../shared/shared.module';
import { UserViewEditComponent } from './user-view-edit/user-view-edit.component';
import { UserAddComponent } from './user-add/user-add.component';

@NgModule({
  declarations: [UserPageComponent, UserTableComponent, UserViewEditComponent, UserAddComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    MatButtonModule,
    MatIconModule,
    MatTableModule,
    SharedModule,
  ],
})
export class UserModule {}
