// user-card.component.ts
import { Component, Input, OnInit } from '@angular/core';
import {User} from "../user.model";

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent implements OnInit {
  @Input() user: User | undefined;

  constructor() { }

  ngOnInit(): void {
  }

  // variable to store the border style for attribute binding
  border = '1px dashed black';
}
