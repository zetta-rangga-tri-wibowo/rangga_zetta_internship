import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from "./auth/auth.guard";
import { RncpTitlePageComponent } from "./rncp-title/rncp-title-page/rncp-title-page.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: '/rncp-title',
    pathMatch: 'full'
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'rncp-title',
    loadChildren: () => import('./rncp-title/rncp-title.module').then(m => m.RncpTitleModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'school',
    loadChildren: () => import('./school/school.module').then(m => m.SchoolModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'user',
    loadChildren: () => import('./user/user.module').then(m => m.UserModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'student',
    loadChildren: () => import('./student/student.module').then(m => m.StudentModule),
    canActivate: [AuthGuard]
  },
  {
    path: '**',
    redirectTo: '/rncp-title',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
