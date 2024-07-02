import { Component, Input, OnInit } from '@angular/core';
import { Artist } from "../../interface.model";

@Component({
  selector: 'app-actress-casting',
  templateUrl: './actress-casting.component.html',
  styleUrls: ['./actress-casting.component.css']
})
export class ActressCastingComponent implements OnInit {

  @Input() data: Artist | undefined;
  constructor() { }

  ngOnInit(): void {
  }

}
