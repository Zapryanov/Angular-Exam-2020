// import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { AuthGuard } from './core/guards/auth.guard';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {
    path: '',
    canActivateChild: [AuthGuard],
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: '/home'
      },
      {
        path: 'home',
        component: HomeComponent,
        data: {
          title: 'HOME'
        }
      },
      {
        path: "about",
        component: AboutComponent
      },
      {
        path: "contact",
        component: ContactComponent
      },
      {
        path: "logout",
        redirectTo: "/contact"
      },
      {
        path: '**',
        component: NotFoundComponent,
        data: {
          title: '404'
        }
      }
    ]
  },
  // {
  //   path: "",
  //   pathMatch: "full",
  //   redirectTo: "/home"
  // },
  // {
  //   path: "home",
  //   component: HomeComponent
  // },
  // {
  //   path: "about",
  //   component: AboutComponent
  // },
  // {
  //   path: "contact",
  //   component: ContactComponent
  // },
  // {
  //   path: "**",
  //   component: NotFoundComponent
  // }
];

export const AppRoutingModule = RouterModule.forRoot(routes);
