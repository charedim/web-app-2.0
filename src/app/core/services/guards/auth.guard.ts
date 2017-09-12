import {Injectable} from '@angular/core';
import {Router, CanActivate} from '@angular/router';

@Injectable()

// when user whant to negivate into the App in the rout
// the guard check if the user in login by the token un local storage
// @return : if user can nagivate
// have been called by app.routing.module;

export class AuthGuard implements CanActivate {

constructor(private route: Router) {}

 canActivate() {
    if (localStorage.getItem('currentUser')) {
      return true;
    }

    this.route.navigate(['/sign-in']);
    return false;
   }
}
