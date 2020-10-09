import {Component, OnInit} from '@angular/core';
import {MovieDBService} from './movie-db.service';

@Component({
  selector: 'app-web-api-consume',
  templateUrl: './web-api-consume.component.html',
  styleUrls: ['./web-api-consume.component.scss']
})
export class WebApiConsumeComponent implements OnInit {

  movies: any;

  constructor(
    private movieDBService: MovieDBService
  ) {
  }

  ngOnInit(): void {
    this.movieDBService.getPopularMovies().subscribe(result => this.movies = result);
  }

}
