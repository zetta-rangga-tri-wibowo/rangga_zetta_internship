import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import {User} from "../user.model";

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {
  users: User[] = [];

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.users$.subscribe(users => {
      this.users = users;
    });
    console.log(this.users);
  }
}
