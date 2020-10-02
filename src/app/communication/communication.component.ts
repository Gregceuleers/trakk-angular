import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-communication',
  templateUrl: './communication.component.html',
  styleUrls: ['./communication.component.scss']
})
export class CommunicationComponent implements OnInit {

  names = ['Greg', 'Laurent', 'Corentin'];

  pour = 0;
  contre = 0;

  constructor() {
  }

  ngOnInit(): void {
  }

  ajouterPour($event: number) {
    this.pour += $event;
  }

  ajouterContre($event: number) {
    this.contre += $event;
  }
}
