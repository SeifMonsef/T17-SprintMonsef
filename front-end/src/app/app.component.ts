import { Component } from '@angular/core';
import { regService} from '../app/services/reg.services'

@Component({
  selector: 'app-root',
  template: `<router-outlet (activate)="onActivate($event)"></router-outlet>`,
  providers:[regService]
})
export class AppComponent {
  // Scroll up to the top of the page on changing the route
  onActivate(event) {
    window.scroll(0, 0);
  }
}
