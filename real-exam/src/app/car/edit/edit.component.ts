import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ICar } from 'src/app/shared/interfaces';
import { CarService } from '../car.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  @Input() car: ICar;

  constructor(
    private router: Router,
    private carService: CarService,
    activatedRoute: ActivatedRoute,
    ) {
      const id = activatedRoute.snapshot.params.id;

      this.carService.getCurrentCar(id).subscribe((data) => {
        this.car = data;
        console.log(this.car);
      })
    }

  ngOnInit(): void {
  }

  editHandler(data: any, id: string): void {
    this.carService.editCar(data, id)
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
