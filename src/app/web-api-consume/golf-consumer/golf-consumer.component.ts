import {Component, OnInit} from '@angular/core';
import {GolfConsumerService, Parcours} from './golf-consumer.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-golf-consumer',
  templateUrl: './golf-consumer.component.html',
  styleUrls: ['./golf-consumer.component.scss']
})
export class GolfConsumerComponent implements OnInit {

  parcours$: Observable<Parcours[]>;

  constructor(
    private service: GolfConsumerService
  ) {
  }

  ngOnInit(): void {
    this.parcours$ = this.service.getAllParcours();
  }

}
