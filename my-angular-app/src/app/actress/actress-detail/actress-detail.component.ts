import { Component, OnInit } from '@angular/core';
import { Artist } from "../../interface.model";
import { DataService } from "../../data.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-actress-detail',
  templateUrl: './actress-detail.component.html',
  styleUrls: ['./actress-detail.component.css']
})
export class ActressDetailComponent implements OnInit {

  dataActress: Artist | undefined;
  movies: any;
  idActress: string | null | undefined;

  constructor(private actressService: DataService, private route: ActivatedRoute) { }

  ngOnInit(): void {
   this.idActress = this.route.snapshot.paramMap.get('id');
    this.dataActress = this.actressService.getArtist(Number(this.idActress));
    this.movies = this.actressService.getMovieByArtist(Number(this.idActress));
    console.log(this.movies)
  }



}
