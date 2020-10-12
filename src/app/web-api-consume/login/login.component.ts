import { Component, OnInit } from '@angular/core';
import {AuthService} from '../golf-consumer/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  msg: string;

  constructor(
    public authService: AuthService,
    public router: Router
  ) { }

  ngOnInit(): void {
  }


  login(): void {
    this.msg = 'Tentative de connection ...';
    this.authService.login().subscribe(result => {
      this.msg = 'Connection réussie !';
      this.router.navigate([this.authService.redirectUrl]).then();
    });

  }

  logout(): void {
    this.msg = 'Déconnection';
    this.authService.logout();
  }
}
