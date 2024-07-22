import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserPageComponent } from './user-page/user-page.component';
import { DashboardLayoutComponent } from '../layout/dashboard-layout/dashboard-layout.component';
import { UserAddComponent } from './user-add/user-add.component';
import { UserViewEditComponent } from './user-view-edit/user-view-edit.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardLayoutComponent,
    children: [
      {
        path: '',
        component: UserPageComponent,
      },
      {
        path: 'add',
        component: UserAddComponent,
      },
      {
        path: 'edit-view/:id',
        component: UserViewEditComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule {}
