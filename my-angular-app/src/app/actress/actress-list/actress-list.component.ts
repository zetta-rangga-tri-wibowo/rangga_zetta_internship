import { Component, OnInit } from '@angular/core';
import { DataService } from "../../data.service";
import { Artist } from "../../interface.model";
import { Router } from "@angular/router";

@Component({
  selector: 'app-actress-list',
  templateUrl: './actress-list.component.html',
  styleUrls: ['./actress-list.component.css']
})
export class ActressListComponent implements OnInit {

  dataActress: Artist[] = [];

  constructor(private actressService: DataService, private route: Router) { }


  ngOnInit(): void {
    this.dataActress = this.actressService.getArtists();
    console.log(this.dataActress)
  }

  actressDetail(id: number) {
    this.route.navigate(['actress', id])
  }

}
