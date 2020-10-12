import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {delay, tap} from 'rxjs/operators';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  redirectUrl: string;

  isLogged: boolean;

  constructor(
    public router: Router
  ) {
  }

  /**
   * Méthode de login
   * @return Observable<boolean>
   */
  login(): Observable<boolean> {
    return of(true).pipe(
      delay(1000),
      tap(value => this.isLogged = value)
    );
  }

  logout(): void {
    this.isLogged = false;
    this.router.navigate(['home']).then();
  }
}
