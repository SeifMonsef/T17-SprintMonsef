import { NgModule } from '@angular/core';
import { ThemeModule } from '../@theme/theme.module';
import { FormsModule } from '@angular/forms';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { ToysComponent } from './toys/toys.component'
import { DashboardComponent } from './dashboard.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
// import { StoreComponent } from './store/store.component';

@NgModule({
  imports: [ThemeModule,
            DashboardRoutingModule,
            FormsModule],
  declarations: [DashboardComponent,ToysComponent,LoginComponent,SignupComponent],
  entryComponents: [],
  providers: []
})
export class DashboardModule {}
