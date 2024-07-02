import { Component, Input, OnInit } from '@angular/core';
import { Movie } from "../../interface.model";

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

  @Input() moviesData: Movie[] = [];
  constructor() { }

  ngOnInit(): void {
  }

}
