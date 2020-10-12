import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {delay, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  redirectUrl: string;

  isLogged = false;

  constructor() {
  }

  login(): Observable<boolean> {
    return of(true).pipe(
      delay(1000),
      tap(value => this.isLogged = value)
    );
  }

  logout(): void {
    this.isLogged = false;
  }
}
