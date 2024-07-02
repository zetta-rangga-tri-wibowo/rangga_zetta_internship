import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { Artist, Movie } from "../../interface.model";
import { DataService } from "../../data.service";

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {
  movieDetail: Movie | undefined;
  paramId: number | undefined;
  actorData: Artist[] = [];

  placeholderImg = 'https://via.placeholder.com/300x400';

  constructor( private route: Router, private activeParam: ActivatedRoute, private movieService: DataService ) {
  }
  ngOnInit(): void {
    this.paramId = this.activeParam.snapshot.params['id'];
    console.log(this.paramId);
    if (this.paramId) {
      this.movieDetail = this.movieService.getMovie(this.paramId);
    }
    if (this.movieDetail) {
      this.actorData = this.movieService.getArtistsByMovieId(this.movieDetail.id);
      console.log(this.actorData)
    }
  }

}

