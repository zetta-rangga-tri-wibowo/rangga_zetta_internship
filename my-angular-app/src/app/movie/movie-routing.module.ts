import { NgModule } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";
import { MoviePageComponent } from "./movie-page/movie-page.component";
import { MovieDetailComponent } from "./movie-detail/movie-detail.component";

const routes: Routes = [
  {
    path: '', component: MoviePageComponent
  },
  {
    path: ':id', component: MovieDetailComponent
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class MovieRoutingModule { }
