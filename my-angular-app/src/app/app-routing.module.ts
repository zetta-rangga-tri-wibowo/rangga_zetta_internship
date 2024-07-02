import { NgModule } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";
import { WellcomeComponent } from "./wellcome/wellcome.component";
import { SignUpComponent } from "./auth/sign-up/sign-up.component";
import { LoginComponent } from "./auth/login/login.component";
import { TrainingComponent } from "./training/training.component";

const routes: Routes = [
  {
    path: '', component: WellcomeComponent
  },
  {
    path: 'signup', component: SignUpComponent
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'training', component: TrainingComponent
  },
  {
    path: 'movie', loadChildren: () => import('./movie/movie.module').then(m => m.MovieModule)
  },
  {
    path: 'actress', loadChildren: () => import('./actress/actress.module').then(a => a.ActressModule)
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
