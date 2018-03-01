import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ToysComponent } from './toys.component';

const routes: Routes = [
  { path: '', component: ToysComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ToysRoutingModule {}
