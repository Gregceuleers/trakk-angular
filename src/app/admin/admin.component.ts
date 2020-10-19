import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthService} from '../web-api-consume/golf-consumer/auth.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  constructor(
    public activatedRoute: ActivatedRoute,
    public authService: AuthService,
    public router: Router
  ) {
  }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(data => {
      if (!this.authService.connectedUser.roles.includes(data.expected)) {
        this.router.navigate(['**']).then();
      }
    });
  }
}
