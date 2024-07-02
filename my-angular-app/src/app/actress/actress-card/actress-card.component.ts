import { Component, Input, OnInit } from '@angular/core';
import { Artist } from "../../interface.model";

@Component({
  selector: 'app-actress-card',
  templateUrl: './actress-card.component.html',
  styleUrls: ['./actress-card.component.css']
})
export class ActressCardComponent implements OnInit {

  @Input() actress: Artist | undefined;
  placeholderImg = 'https://via.placeholder.com/150x200';

  constructor() { }

  ngOnInit(): void {
  }

}
