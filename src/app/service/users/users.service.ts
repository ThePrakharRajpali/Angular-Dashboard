import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { User } from 'src/app/models/User';
import { Order } from 'src/app/models/Order';
import { Item } from 'src/app/models/Item';

import { USERS } from 'src/app/mock/users';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private users: User[] = USERS;
  getUsers(): Observable<User[]> {
    return of(this.users);
  }

  getUser(id: string): Observable<User> {
    const user = this.users.find((u) => u.id == id);
    if (user) return of(user);
    return of();
  }

  addUser(user: User): void {
    this.users.push(user);
  }

  deleteUser(user: User): void {
    const i = this.users.findIndex((u) => u.id == user.id);
    this.users.splice(i, 1);
  }
  constructor() {}
}
