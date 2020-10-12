import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {delay, tap} from 'rxjs/operators';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  BASE_BACK_URL = 'http://localhost:8081/';

  redirectUrl: string;

  isLogged: boolean;

  constructor(
    public router: Router,
    public httpClient: HttpClient
  ) {
  }

  /**
   * Méthode de login
   * @return Observable<boolean>
   */
  login(formValue: { username: string; password: string }): Observable<boolean> {

    this.httpClient.post<{ username: string; password: string }>(this.BASE_BACK_URL + 'users/auth', formValue)
      .subscribe(value => console.log(value));

    return of(true);
    // MOCK design
    // return of(true).pipe(
    //   delay(1000),
    //   tap(value => this.isLogged = value)
    // );
  }

  logout(): void {
    this.isLogged = false;
    this.router.navigate(['home']).then();
  }
}
