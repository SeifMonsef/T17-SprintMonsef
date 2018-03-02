import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SignupService } from './signup.service';
import { SignupComponent } from './signup.component';
import { ThemeModule } from '../../../@theme/theme.module';
@NgModule({
  imports: [ThemeModule, FormsModule],
  declarations: [SignupComponent],
  providers: [SignupService]
})
export class SignupModule {}
