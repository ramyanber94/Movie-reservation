import { Movie } from '../entity/movie';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export interface ProductGroup {
  movie: Movie;
}

export const selectMovie = createSelector(
  createFeatureSelector('movieDetails'),
  (state: Movie) => {
    return state;
  }
);
