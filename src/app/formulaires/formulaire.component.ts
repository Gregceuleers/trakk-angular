import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.scss']
})
export class FormulaireComponent implements OnInit {

  objForm: {
    name: string,
    email: string,
    genre: Genre
  };

  constructor() {
  }

  ngOnInit(): void {
    this.objForm = {
      name: '',
      email: '',
      genre: Genre.M
    };
  }

  submit() {
    console.log(this.objForm);
  }

  getEnumValues(): string[] {
    return ['Male', 'Female', 'Noop'];
  }
}

export enum Genre {
  M = 'Male',
  F = 'Female',
  X = 'Noop'
}
