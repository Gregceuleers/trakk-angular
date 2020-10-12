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

  getAllParcours(): Observable<any> {
    return this.httpClient.get<any>(this.API_BASE_URL + 'parcours', {
      headers: {
        Authorization: 'Basic ' + btoa('greg:1234')
      }
    });
  }
}
