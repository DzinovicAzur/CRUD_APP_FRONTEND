import { Component, OnInit, inject } from '@angular/core';
import { UserService } from '../services/user.service';
import User from '../types/user';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [MatButtonModule, RouterLink],
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'] // Note the plural form 'styleUrls'
})
export class UsersComponent implements OnInit { // Implement OnInit interface
  users: User[] = [];
  userService = inject(UserService);

  ngOnInit() {
    this.userService.getUsers().subscribe((result) => {
      this.users = result;
      console.log(this.users);
    });
  }
}