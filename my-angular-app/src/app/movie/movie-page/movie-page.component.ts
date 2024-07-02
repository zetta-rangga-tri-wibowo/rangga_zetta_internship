import { Component, OnInit } from '@angular/core';
import { Movie } from "../../interface.model";
import { DataService } from "../../data.service";

@Component({
  selector: 'app-movie-page',
  templateUrl: './movie-page.component.html',
  styleUrls: ['./movie-page.component.css']
})
export class MoviePageComponent implements OnInit {

  movies: Movie[] = [];

  constructor(private movieService: DataService) {
  }

  ngOnInit(): void {
    this.movieService.getMovies().subscribe((data: Movie[]) => {
      this.movies = data;
      console.log(data, "data")
    });
  }

}
