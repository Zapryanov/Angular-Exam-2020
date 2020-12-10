import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../core/guards/auth.guard';
import { DetailComponent } from './detail/detail.component';

const routes: Routes = [
  {
    path: "cars",
    children: [
      {
        path: "details/:id",
        component: DetailComponent,
        data: {
          isLogged: false
        }
      },
      {
        path: "details/:id",
        component: DetailComponent,
        data: {
          isLogged: false
        }
      }
    ]
  }
];

export const CarRoutingModule = RouterModule.forChild(routes);
