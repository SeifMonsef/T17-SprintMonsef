import { NgModule } from '@angular/core';
import { ThemeModule } from '../../@theme/theme.module';
import { ItemsRoutingModule } from './items-routing.module';
import { ItemsComponent } from './items.component';
import { ItemsService} from './items.service';
import { FormsModule } from '@angular/forms';
@NgModule({
  imports: [ThemeModule, ItemsRoutingModule, FormsModule],
  declarations: [ItemsComponent],
  providers: [ItemsService]
})
export class ItemsModule {}
