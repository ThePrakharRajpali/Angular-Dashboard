import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { UsersService } from 'src/app/service/users/users.service';
import { User } from 'src/app/models/User';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent implements OnInit {
  user?: User;

  constructor(
    private usersService: UsersService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getUser();
  }

  getUser(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id)
      this.usersService.getUser(id).subscribe((user) => (this.user = user));
  }

  goBack(): void {
    this.location.back();
  }

  delete(): void {
    if (this.user) {
      this.usersService.deleteUser(this.user);
      this.location.back();
    }
  }
}
