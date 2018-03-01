import { APP_BASE_HREF } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { HttpModule} from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ThemeModule } from './@theme/theme.module';
import { regService} from '../app/services/reg.services' ;
import { UserOb} from '../app/objects/UserObject';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
// import { ToysComponent } from './dashboard/toys/toys.component'


@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    HttpModule,
    NgbModule.forRoot(),
    ThemeModule.forRoot(),
    AppRoutingModule,
    FormsModule
  ],
  bootstrap: [AppComponent],
  providers: [regService,{ provide: APP_BASE_HREF, useValue: '/' }]
})
export class AppModule {}
