import {Component, OnInit} from '@angular/core';
import {GolfConsumerService, Parcours} from './golf-consumer.service';
import {Observable} from 'rxjs';
import {AuthService} from './auth.service';

@Component({
  selector: 'app-golf-consumer',
  templateUrl: './golf-consumer.component.html',
  styleUrls: ['./golf-consumer.component.scss']
})
export class GolfConsumerComponent implements OnInit {

  parcours$: Observable<Parcours[]>;

  constructor(
    private service: GolfConsumerService,
    public authService: AuthService
  ) {
  }

  ngOnInit(): void {
    this.parcours$ = this.service.getAllParcours();
  }

}
