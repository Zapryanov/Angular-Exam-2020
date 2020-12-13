import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IUser } from 'src/app/shared/interfaces';
import { UserService } from 'src/app/user/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})


export class HeaderComponent {

  user: IUser = this.userService.currentUser;

  get isLogged(): boolean {
    return this.userService.isLogged;
  }

  get username(): string {
    return this.userService.username
  }

  constructor(
    private userService: UserService,
    private router: Router
    ) { }

  logoutHandler(): void {
    this.userService.logout().subscribe(() => this.router.navigate(["/user/login"]));
  }

}
