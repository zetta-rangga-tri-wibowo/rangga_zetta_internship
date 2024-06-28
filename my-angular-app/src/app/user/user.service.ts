import { Injectable } from '@angular/core';
import {User} from "./user.model";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  usersDummy: User[] = [
    { id: 1, name: 'John Cena', dateBirth: new Date(1990, 1, 1), balance: 1000 },
    { id: 2, name: 'John Doe', dateBirth: new Date(1988, 6, 15), balance: 500 },
    {id: 3, name: 'Dwåyne Johnson', dateBirth: new Date(1985, 6, 15), balance: 500},
    {id: 4, name: 'Katty Perry', dateBirth: new Date(1990, 6, 15), balance: 500},
    {id: 5, name: 'Micheal Jackson', dateBirth: new Date(1989, 6, 15), balance: 500},
  ];

  constructor() { }

  getUsers() {
    return this.usersDummy;
  }
}
