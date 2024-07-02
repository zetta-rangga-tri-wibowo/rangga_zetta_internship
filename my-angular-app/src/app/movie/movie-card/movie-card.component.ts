import { Component, Input, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.css']
})
export class MovieCardComponent implements OnInit {

  @Input() movieDetail: any = {};

  constructor(private router: Router) { }

  ngOnInit(): void {
    console.log(this.movieDetail, "movieDetails")
  }

  onCardClick() {
    this.router.navigate(["/movie", this.movieDetail.id]);
    console.log(this.movieDetail.id, "movieDetails")
  }

}
