import { Movie } from '../entity/movie';
import { createReducer, on } from '@ngrx/store';
import { reservedSeatsForMovie } from './movie.actions';

export const intialMovieDetails: Movie[] = [];

export const movieReducer = createReducer(
    intialMovieDetails,


  on(reservedSeatsForMovie, (entries , movie) => {
        const entriesClone: Movie[] = JSON.parse(JSON.stringify(entries));
        entriesClone.push(movie);
        return entriesClone;
  }),
)