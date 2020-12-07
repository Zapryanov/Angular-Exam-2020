import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarComponent } from './car/car.component';
import { CarService } from './car.service';



@NgModule({
  declarations: [
    CarComponent
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
