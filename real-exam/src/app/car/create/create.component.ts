import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CarService } from '../car.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  constructor(
    private carService: CarService,
    private router: Router
    ) { }

  ngOnInit(): void {
  }

  submitHandler(data: any): void {
    this.carService.saveCar(data)
      .subscribe({
        next: () => {
          this.router.navigate(["/"]);
        },
        error: (err) => {
          console.error(err)
        }
      })
  }

}
