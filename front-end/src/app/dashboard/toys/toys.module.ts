import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ToysComponent } from './toys.component';
import { ToysRoutingModule } from './toys-routing.module';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { ToysService} from './toys.service';
import { FormsModule } from '@angular/forms';
@NgModule({
  imports: [CommonModule,ToysRoutingModule, Ng2SmartTableModule, FormsModule],
  declarations: [ToysComponent],
  providers: [ToysService]
})
export class ToysModule { }
