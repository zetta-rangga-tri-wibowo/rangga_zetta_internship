import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./component/home/home.component";

const routes: Routes = [
  {
    path: "user",
    loadChildren: () => import('./user/user.module').then(m => m.UserModule)
  },
  {
    path: "post",
    loadChildren: () => import('./post/post.module').then(m => m.PostModule)
  },
  {
    path: '', component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
