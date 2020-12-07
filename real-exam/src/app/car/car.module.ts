import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarComponent } from './car/car.component';
import { CarService } from './car.service';
import { CarItemComponent } from './car-item/car-item.component';



@NgModule({
  declarations: [
    CarComponent,
    CarItemComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [
    CarService
  ],
  exports: [
    CarComponent
  ]
})
export class CarModule { }
