import { Injectable } from '@angular/core';
import {User} from "./user.model";
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private usersSubject = new BehaviorSubject<User[]>([]);
  users$ = this.usersSubject.asObservable();

  addUser(user: User) {
    const users = this.usersSubject.getValue();
    users.push(user);
    this.usersSubject.next(users);
  }

  getUserById(id: number): User | undefined {
    const users = this.usersSubject.getValue();
    return users.find(user => user.id === id);
  }

  editUser(id: number, updatedUser: User) {
    const users = this.usersSubject.getValue();
    const index = users.findIndex(user => user.id === id);
    if (index !== -1) {
      users[index] = updatedUser;
      this.usersSubject.next(users);
    }
  }
  //
  deleteUser(id: number) {
    const users = this.usersSubject.getValue();
    const index = users.findIndex(user => user.id === id);
    if (index !== -1) {
      users.splice(index, 1);
      this.usersSubject.next(users);
    }
  }
}
