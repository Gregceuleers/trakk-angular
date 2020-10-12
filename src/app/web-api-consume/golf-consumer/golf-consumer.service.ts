import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GolfConsumerService {

  API_BASE_URL = 'http://localhost:8081/';

  constructor(
    private httpClient: HttpClient
  ) {
  }

  getAllParcours(): Observable<Parcours[]> {
    return this.httpClient.get<Parcours[]>(this.API_BASE_URL + 'parcours', {
      headers: {
        Authorization: 'Basic ' + btoa('greg:1234')
      }
    });
  }
}

export interface Parcours {
  idParcours: number;
  nom: string;
  email: string;
  typeParcours: string;
  dateCreation: Date;
  dateModification: Date;
  trous: Trou[] | null;
}
export interface Trou {
  id: number;
  typeTrou: string;
  distance: number;
  parcours: Parcours | null;
}

