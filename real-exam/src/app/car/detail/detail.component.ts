import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ICar } from 'src/app/shared/interfaces';
import { UserService } from 'src/app/user/user.service';
import { CarService } from '../car.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  get isLogged(): boolean {
    return this.userService.isLogged;
  }

  get currentUserId(): string {
    return this.userService.userId;
  }

  car: ICar;

  constructor(
    private router: Router,
    private carService: CarService,
    activatedRoute: ActivatedRoute,
    public userService: UserService
    ) {
      const id = activatedRoute.snapshot.params.id;

      carService.getCurrentCar(id).subscribe((car) => {
        this.car = car;
        console.log(car)
      })
    }

  ngOnInit(): void {

  }

  deleteHandler(id: string): void {
    this.carService.deleteCar(id).subscribe({
      next: () => {
        this.router.navigate(["/"]);
      },
      error: (err) => {
        console.error(err)
      }
    })
  }


}
