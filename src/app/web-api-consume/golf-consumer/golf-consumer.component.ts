import { Component, OnInit } from '@angular/core';
import {GolfConsumerService} from './golf-consumer.service';

@Component({
  selector: 'app-golf-consumer',
  templateUrl: './golf-consumer.component.html',
  styleUrls: ['./golf-consumer.component.scss']
})
export class GolfConsumerComponent implements OnInit {

  constructor(
    private service: GolfConsumerService
  ) { }

  ngOnInit(): void {
    this.service.getAllParcours().subscribe(result => console.log(result));
  }

}
