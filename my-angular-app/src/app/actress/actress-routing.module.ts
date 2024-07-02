import { NgModule } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";
import { ActressPageComponent } from "./actress-page/actress-page.component";
import { ActressDetailComponent } from "./actress-detail/actress-detail.component";
// import { MoviePageComponent } from "./movie-page/movie-page.component";
// import { MovieDetailComponent } from "./movie-detail/movie-detail.component";

const routes: Routes = [
  {
    path: '', component: ActressPageComponent
  },
  {
    path: ':id', component: ActressDetailComponent
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class MovieRoutingModule { }
