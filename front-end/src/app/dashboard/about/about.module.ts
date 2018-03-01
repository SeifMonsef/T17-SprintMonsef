import { NgModule } from '@angular/core';
import { ThemeModule } from '../../@theme/theme.module';
import { AboutRoutingModule } from './about-routing.module';
import { AboutComponent } from './about.component';

@NgModule({
  imports: [ThemeModule, AboutRoutingModule],
  declarations: [AboutComponent],
  providers: []
})
export class AboutModule {}
