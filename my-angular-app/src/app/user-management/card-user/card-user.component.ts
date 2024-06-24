import { Component, OnInit, Input } from '@angular/core';
import {User} from "../user.model";
import {Router} from "@angular/router";

@Component({
  selector: 'app-card-user',
  templateUrl: './card-user.component.html',
  styleUrls: ['./card-user.component.css']
})
export class CardUserComponent implements OnInit {
  @Input() user: User = {} as User;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goToDetails() {
    this.router.navigate(['/user', this.user.id]);
  }
}
