import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../core/guards/auth.guard';
import { CreateComponent } from './create/create.component';
import { DetailComponent } from './detail/detail.component';
import { EditComponent } from './edit/edit.component';

const routes: Routes = [
  {
    path: "cars",
    // canActivateChild: [AuthGuard],
    children: [
      {
        path: "details/:id",
        component: DetailComponent,
        data: {
          isLogged: true
        }
      },
      {
        path: "edit/:id",
        component: EditComponent,
        data: {
          isLogged: true
        }
      },
      {
        path: "create",
        component: CreateComponent,
        data: {
          isLogged: true
        }
      }
    ]
  }
];

export const CarRoutingModule = RouterModule.forChild(routes);
