import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { ToysComponent } from './toys/toys.component';

const routes: Routes = [

  {
    path: '',
    component: DashboardComponent,
    children: [
    {
      path: '',
      loadChildren : './about/about.module#AboutModule'
    },
    {
      path:'items',
    },
    { path: 'authe',
    children: [
      {
        path: 'login',
        component: LoginComponent
      },
    {
      path: 'signup',
      component: SignupComponent
    }
    ]},
    {
      path: 'toystore',
      component: ToysComponent
    }
      ],

    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class DashboardRoutingModule {}
