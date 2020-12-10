import { RouterModule, Routes } from '@angular/router';
import { DetailComponent } from './detail/detail.component';
import { EditComponent } from './edit/edit.component';

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
        path: "edit/:id",
        component: EditComponent,
        data: {
          isLogged: false
        }
      }
    ]
  }
];

export const CarRoutingModule = RouterModule.forChild(routes);
