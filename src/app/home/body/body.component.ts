import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/http.service';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { reservedSeatsForMovie } from 'src/app/movie-state-store/movie.actions';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss'],
})
export class BodyComponent implements OnInit {
  page: number = 1;
  movies?: Array<any>;
  images: Array<string> = [];

  constructor(private http: HttpService, private route: Router, private store: Store) {}

  ngOnInit(): void {
    this.fetchMovies()
  }

  goNext(){
    this.page++
    this.fetchMovies()
  }

  goBack(){
    this.page--
    this.fetchMovies()
  }

  showMovieDetails(movie: any){
    this.store.dispatch(reservedSeatsForMovie(movie));
    this.route.navigate(['details'],  { state: { data: movie } });
  }

  fetchMovies(){
    this.http.getMovies(this.page).subscribe((data: any) => {
      this.movies = data.results;
      console.log(this.movies)
    });
  }
}
