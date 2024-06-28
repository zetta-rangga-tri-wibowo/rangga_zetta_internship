// user-list.component.ts
import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import {CombineWordsPipe} from "../../pipe/combine-words.pipe";
import {RemoveAccentPipe} from "../../pipe/remove-accent.pipe";
import {User} from "../user.model";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users: User[] = [];
  filteredUsers: User[] = [];
  combineWordsPipe = new CombineWordsPipe();
  removeAccentPipe = new RemoveAccentPipe();


  constructor(private userService: UserService) { }

  ngOnInit(): void {
    // Get the users from the service
    this.users = this.userService.getUsers();
    // Set the filteredUsers to the users
    this.filteredUsers = [...this.users];
  }


  onSearchChange(search: string): void {
    // Validate the search string
    const regex = /^[a-zA-Z\s]*$/; // Allow spaces in the search string
    if (!regex.test(search)) {
      // If the search string contains numbers or special characters, return without filtering the users
      return;
    }

    // Filter the users based on the search string
    const searchValue = this.combineWordsPipe.transform(this.removeAccentPipe.transform(search));
    // Filter the users based on the search value and set the filteredUsers to the result
    this.filteredUsers = this.users.filter(user =>
      this.combineWordsPipe.transform(this.removeAccentPipe.transform(user.name)).includes(searchValue)
    );
  }

}
