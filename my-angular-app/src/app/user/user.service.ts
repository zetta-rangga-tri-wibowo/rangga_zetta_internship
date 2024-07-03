import { Injectable } from '@angular/core';
import { User } from "./user.model";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private _users = new BehaviorSubject<User[]>([]);
  users$ = this._users.asObservable();

  constructor() {
    const dummyUser: User = {
      civility: 'mr',
      lastName: 'Doe',
      firstName: 'John',
      email: 'john.doe@example.com',
      gender: 'male',
      dateOfBirth: new Date(1990, 1, 1),
      id: 1
    };
    this.addUser(dummyUser);
  }

  changeLanguage(lang: string) {
    // this.translate(lang);
  }

  addUser(user: User) {
    const currentValue = this._users.value;
    const updatedValue = [...currentValue, user];
    this._users.next(updatedValue);
  }

  getUsers(): User[] {
    return this._users.value;
  }

}
