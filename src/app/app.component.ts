import {Component} from '@angular/core';
import {Router, NavigationEnd} from '@angular/router';
import {GoogleAnalyticsEventsService} from './google-analytics-events.service';
@Component({
  selector:    'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
//   constructor(public router: Router, public googleAnalyticsEventsService: GoogleAnalyticsEventsService) {
//     this.router.events.subscribe(event => {
//       if (event instanceof NavigationEnd) {
//         ga('set', 'page', event.urlAfterRedirects);
//         ga('send', 'pageview');
//       }
//     });
//   }
//
// }
constructor() {

}

}
