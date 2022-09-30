import { createAction, props } from '@ngrx/store';
import { Movie } from '../entity/movie';

export const reservedSeatsForMovie = createAction('reserveSeats' , props<Movie>());