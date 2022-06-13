import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/User';

import { UsersService } from 'src/app/service/users/users.service';

@Component({
  selector: 'app-user-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css'],
})
export class IndexComponent implements OnInit {
  users?: User[] = [];

  constructor(private usersService: UsersService) {}

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(): void {
    this.usersService.getUsers().subscribe((users) => (this.users = users));
  }
}
