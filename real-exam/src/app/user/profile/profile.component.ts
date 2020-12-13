import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  get carsCount(): number {
    return this.userService.countCars;
  }

  get username(): string {
    return this.userService.username;
  }

  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

}
