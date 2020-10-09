import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieDBService {

  BASE_URL = 'https://api.themoviedb.org/3/';

  API_KEY = 'c0a9b5c2b86a3a47c52b9821d59430c2';

  constructor(
    private httpClient: HttpClient
  ) {
  }

  getPopularMovies(): Observable<any> {
    return this.httpClient.get<any>(this.BASE_URL + 'discover/movie?api_key=' + this.API_KEY + '&sort_by=popularity.desc');
  }
}
