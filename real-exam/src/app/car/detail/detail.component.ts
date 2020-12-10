import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ICar } from 'src/app/shared/interfaces';
import { CarService } from '../car.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  car: ICar;

  constructor(
    carService: CarService,
    activatedRoute: ActivatedRoute
    ) {
      const id = activatedRoute.snapshot.params.id;
    
      carService.getCurrentCar(id).subscribe((car) => {
        this.car = car;
      })
    }

  ngOnInit(): void {

  }

}
