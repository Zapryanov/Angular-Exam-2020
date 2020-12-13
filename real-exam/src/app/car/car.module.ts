import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarComponent } from './car/car.component';
import { CarService } from './car.service';
import { CarItemComponent } from './car-item/car-item.component';
import { DetailComponent } from './detail/detail.component';
import { CarRoutingModule } from './car-routing.module';
import { EditComponent } from './edit/edit.component';
import { CreateComponent } from './create/create.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    CarComponent,
    CarItemComponent,
    DetailComponent,
    EditComponent,
    CreateComponent
  ],
  imports: [
    CommonModule,
    CarRoutingModule,
    FormsModule,
    SharedModule
  ],
  providers: [
    CarService
  ],
  exports: [
    CarComponent,
    CarItemComponent,
    DetailComponent,
    EditComponent,
    CreateComponent
  ]
})
export class CarModule { }
