import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
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
      loadChildren : './items/items.module#ItemsModule'
    },
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
