import { Injectable } from '@angular/core';
import { User } from "./user.model";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private _users = new BehaviorSubject<User[]>([]);
  users$ = this._users.asObservable();

  constructor() {}

  addUser(user: User) {
    const currentValue = this._users.value;
    const updatedValue = [...currentValue, user];
    this._users.next(updatedValue);
  }

  getUser(id: number): User {
    return <User>this._users.value.find( user => user.id === id );
  }

  editUser(user: User) {
    const users = this._users.value;
    const index = users.findIndex( u => u.id === user.id );
    users[index] = user;
    this._users.next(users);
  }

  deleteUser(id: number) {
    const users = this._users.value;
    const updatedUsers = users.filter( user => user.id !== id );
    this._users.next(updatedUsers);
  }

}
