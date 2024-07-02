import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviePageComponent } from './movie-page/movie-page.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { MovieRoutingModule } from "./movie-routing.module";
import { MovieListComponent } from './movie-list/movie-list.component';
import { MovieCardComponent } from './movie-card/movie-card.component';
import { MaterialModule } from "../material.module";
import { ActressModule } from "../actress/actress.module";



@NgModule({
  declarations: [
    MoviePageComponent,
    MovieDetailComponent,
    MovieListComponent,
    MovieCardComponent
  ],
  imports: [
    CommonModule,
    MovieRoutingModule,
    MaterialModule,
    ActressModule,
  ]
})
export class MovieModule { }
