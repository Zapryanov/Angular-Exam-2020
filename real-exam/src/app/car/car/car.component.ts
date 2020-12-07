import { Component, OnInit } from '@angular/core';
import { ICar } from 'src/app/shared/interfaces';
import { CarService } from '../car.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  allCars: ICar[];

  constructor(private carService: CarService) { }

  ngOnInit(): void {
    this.carService.getAllCars().subscribe((data) => {
      this.allCars = data;
      console.log(this.allCars)
    })
  }

}
