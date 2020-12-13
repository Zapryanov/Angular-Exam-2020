import { Component, OnInit } from '@angular/core';
import { CarService } from 'src/app/car/car.service';
import { ICar } from 'src/app/shared/interfaces';
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

  isLoading = true;

  allCars: ICar[];

  constructor(
    private userService: UserService,
    private carService: CarService
    ) { }

  ngOnInit(): void {
    this.carService.getAllCars().subscribe((data) => {
      this.isLoading = false;
      this.allCars = data.filter(car=> car.author.username===this.username);
      // console.log(this.allCars);
    })
  }

}
