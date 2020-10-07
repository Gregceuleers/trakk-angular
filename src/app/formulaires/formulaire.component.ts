import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

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

  reactForm: FormGroup;

  constructor(
    private builder: FormBuilder
  ) {
  }

  ngOnInit(): void {
    this.objForm = {
      name: '',
      email: '',
      genre: Genre.M
    };
    this.reactForm = this.builder.group({
      name: ['', [
        Validators.required,
        Validators.pattern(/^([^0-9]*)$/),
        Validators.minLength(2),
        Validators.maxLength(20)
        ]
      ],
      email: ['', [Validators.required, Validators.email]],
      genre: [Genre.F]
    });
  }

  submit(): void {
    console.log(this.objForm);
  }

  getEnumValues(): string[] {
    return ['Male', 'Female', 'Noop'];
  }

  submitReactive(): void {
    console.log(this.reactForm.value);
  }
}

export enum Genre {
  M = 'Male',
  F = 'Female',
  X = 'Noop'
}
