import { Component, OnInit } from '@angular/core';

import { UsersService } from 'src/app/service/users/users.service';
import { User } from 'src/app/models/User';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css'],
})
export class AddComponent implements OnInit {
  name?: string;
  email?: string;

  constructor(private usersService: UsersService) {}

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.name && this.email) {
      const newUser: User = {
        id: 'U000',
        name: this.name,
        email: this.email,
      };
      this.usersService.addUser(newUser);
      this.name = '';
      this.email = '';
    }
  }
}
