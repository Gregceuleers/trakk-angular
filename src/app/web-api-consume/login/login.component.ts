import {Component, OnInit} from '@angular/core';
import {AuthService} from '../golf-consumer/auth.service';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  msg: string;
  form: FormGroup;

  constructor(
    public authService: AuthService,
    public router: Router,
    public builder: FormBuilder
  ) {
  }

  ngOnInit(): void {
    this.form = this.builder.group({
      username: [''],
      password: ['']
    });
  }


  login(): void {
    this.msg = 'Tentative de connection ...';
    if (this.form.valid) {
      this.authService.login(this.form.value as { username: string, password: string }).subscribe(result => {
        this.msg = 'Connection réussie !';
        if (result.username && result.password) {
          this.authService.isLogged = true;
          sessionStorage.setItem('credentials', result.username + ':' + this.form.value.password);
          this.router.navigate([this.authService.redirectUrl]).then();
        }

      });
    }


  }

  logout(): void {
    this.msg = 'Déconnection';
    this.authService.logout();
  }
}
