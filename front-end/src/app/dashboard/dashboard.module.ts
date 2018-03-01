import { NgModule } from '@angular/core';
import { ThemeModule } from '../@theme/theme.module';
import { FormsModule } from '@angular/forms';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { ToysComponent } from './toys/toys.component'
import { DashboardComponent } from './dashboard.component';
// import { StoreComponent } from './store/store.component';

@NgModule({
  imports: [ThemeModule,
            DashboardRoutingModule,
            FormsModule],
  declarations: [DashboardComponent,ToysComponent],
  entryComponents: [],
  providers: []
})
export class DashboardModule {}
