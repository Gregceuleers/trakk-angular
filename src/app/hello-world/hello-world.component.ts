import {Component, OnInit} from '@angular/core';
import {AuthService} from '../web-api-consume/golf-consumer/auth.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-hello-world',
  templateUrl: './hello-world.component.html',
  styleUrls: ['./hello-world.component.scss']
})
export class HelloWorldComponent implements OnInit {

  variable = 'Affichage de ma donnée depuis le .TS';

  champ: string;

  color: string;

  incrementation = 0;

  constructor(
    public authService: AuthService,
    public activatedRoute: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    this.activatedRoute.url.subscribe(urlSegment => this.authService.redirectUrl = urlSegment[0].path);
  }

  affichage(): string {
    return 'Affiche-moi !!!';
  }

  afficheDiv(div: HTMLDivElement): string {
    return div.innerHTML;
  }

  incr(): void {
    this.incrementation++;
  }

  changeValue(select: HTMLSelectElement): void {
    console.log(select.value);
  }
}
