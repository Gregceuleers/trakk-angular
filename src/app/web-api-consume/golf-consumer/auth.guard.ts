import {Injectable} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router} from '@angular/router';
import {Observable} from 'rxjs';
import {AuthService} from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {


  constructor(
    public authService: AuthService,
    public router: Router
  ) {
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    const url = state.url;

    return this.checkLogin(url);
  }

  checkLogin(url: string): boolean | UrlTree {

    this.authService.redirectUrl = url;

    if (this.authService.isLogged) {
      console.log('je passe ici');
      return true;
    }

    return this.router.parseUrl('/redirect-message');
  }
}
