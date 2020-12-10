import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarComponent } from './car/car.component';
import { CarService } from './car.service';
import { CarItemComponent } from './car-item/car-item.component';
import { DetailComponent } from './detail/detail.component';
import { CarRoutingModule } from './car-routing.module';



@NgModule({
  declarations: [
    CarComponent,
    CarItemComponent,
    DetailComponent
  ],
  imports: [
    CommonModule,
    CarRoutingModule
  ],
  providers: [
    CarService
  ],
  exports: [
    CarComponent,
    CarItemComponent,
    DetailComponent
  ]
})
export class CarModule { }
